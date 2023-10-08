import parse from '../parser/WDTPDAST.js';
import { isNumberLiteral, isStringLiteral } from './WDTPDTypes.js';

let binaryOperations = {
    '||': (a, b) => a || b,
    '&&': (a, b) => a && b,
    '|' : (a, b) => a |  b,
    '&' : (a, b) => a &  b,

    '==': (a, b) => a === b,
    '!=': (a, b) => a !== b,
    '>':  (a, b) => a  >  b,
    '<':  (a, b) => a  <  b,
    '>=': (a, b) => a >=  b,
    '<=': (a, b) => a <=  b,

    '*':  (a, b) => a  *  b,
    '/':  (a, b) => a  /  b, // real division as defined in the wiki
    '%':  (a, b) => a  %  b,
    '+':  (a, b) => a  +  b,
    '-':  (a, b) => a  -  b,

    '^':  (a, b) => Math.pow(a,  b),
    '↑':  (a, b) => Math.pow(a,  b),
    '**': (a, b) => Math.pow(a,  b),
}
let unaryOperations = {
    "!": (a) => !a,
    "-": (a) => -a,
    "+": (a) => +a,
}

let functions = {
    "len": {
        params: ["string|array"],
        type: "number",
        f: (s) => isStringLiteral(s) ? s.length : null
    },
    "abs": {
        params: ["number"],
        type: "number",
        f: Math.abs
    },
    "sqrt": {
        params: ["number"],
        type: "number",
        f: Math.sqrt
    },
    "int": {
        params: ["number"],
        type: "number",
        f: Math.floor
    }
}

export default class WDTPDInterpreter {
    constructor() {
        this.env = {} // Stores variable => value mappings

        this.functions = functions;

        this.input = [];
        this.output = console.log;

        this.maxExecutions = 10000;
        this.executions = 0;
        this.stopped = false;
    }

    run(code) {
        let program = parse(code);

        this.trace = [];
        this.capture("Start program");
        try {
            program.forEach((stmt) => this.execute(stmt));
        } catch (err) {
            console.error(err);
            return false;
        }
        this.capture("End program");
        return true;
    }

    getNextInInputStream() {
        return this.input.length > 0 ? this.input.shift() : null;
    }

    // Env: variable names are case insensitive

    updateEnv(ref, value) {
        if (ref.type == "id") {
            this.env[ref.id] = value;
        } else if (ref.type == "array_reference") {
            if (typeof this.env[ref.id] != "object") {
                this.env[ref.id] = {};
            } 
            this.env[ref.id][this.evaluate(ref.index[0])] = value;
        } else {
            console.error("WDTPDInterpreter::updateEnv unimplemented", key);
        }
    }

    getEnv(ref) {
        if (ref.type == "id") {
            return this.env[ref.id];
        } else if (ref.type == "array_reference") {
            return this.env[ref.id][this.evaluate(ref.index[0])];
        } else {
            console.error("WDTPDInterpreter::getEnv unimplemented", key);
        }
    }

    executeStmts(stmts) {
        stmts.forEach((s) => this.execute(s))
    }

    execute(stmt) {
        if (stmt == null) {
            return
        }

        this.executions += 1;
        if (this.executions >= this.maxExecutions) {
            this.stopped = true;
            console.log(this.env);
            throw "Program running for too long. Force quitting!";
        }

        switch (stmt.type) {
            case "assignment_list":
                this.executeStmts(stmt.children);
                break;
            case "assignment":
                let lhs = stmt.leftHandSide;
                let expression = stmt.expression;
                let value = this.evaluate(expression);
                this.updateEnv(lhs, value);
                //this.capture("Assigned", lhs.id);
                break;
            case "if_stmt":
                let condition = this.evaluate(stmt.condition);
                this.capture("If statement, condition evaluates to", condition);
                if (condition) {
                    this.executeStmts(stmt.onTrueBody);
                } else {
                    this.executeStmts(stmt.onFalseBody)
                }
                break;
            case "while_loop":
                let conditionExpr = stmt.condition;
                let whileLoopBody = stmt.stmts;

                if (!this.evaluate(conditionExpr)) {
                    this.capture("While loop never started");
                    break;
                }

                let whileLoopIter = 0;
                while (this.stopped == false && this.evaluate(conditionExpr)) {
                    this.capture("While loop inter", ++whileLoopIter);
                    this.executeStmts(whileLoopBody);
                }
                this.capture("Exit while loop");
                break;
            case "for_loop":
                let forLoopInitAssignment = stmt.init;
                let key = forLoopInitAssignment.leftHandSide;
                let stopCondExpr = stmt.stopCond;
                let stepExpr = stmt.step == null ? 1 : stmt.step;
                let forLoopBody = stmt.stmts;

                this.execute(forLoopInitAssignment);

                let LTE = () => this.evaluate(key) <= this.evaluate(stopCondExpr);
                let GTE = () => this.evaluate(key) >= this.evaluate(stopCondExpr);
                let forLoopCondition = this.evaluate(key) < this.evaluate(stopCondExpr) ? LTE : GTE;

                if (!this.evaluate(forLoopCondition)) {
                    this.capture("For loop never started");
                    break;
                }

                let forLoopIter = 0;
                while (forLoopCondition()) {
                    this.capture("For loop iter", ++forLoopIter);
                    this.executeStmts(forLoopBody);
                    this.updateEnv(key, this.evaluate(key) + this.evaluate(stepExpr));
                }
                this.capture("Exit for loop");
                break;
            case "input":
                console.log(stmt);
                stmt.refs.forEach((ref) => this.updateEnv(ref, this.getNextInInputStream()));
                break;
            case "output":
                let outputExprs = stmt.exprs;
                let outputValues = outputExprs.map((e) => this.evaluate(e));
                outputValues.forEach(this.output)
                this.capture("OUTPUT", outputValues);
                break;
            default:
                console.error("Unimplemented execution type", stmt.type);
        }
    }

    evaluate(expr) { 
        if (!expr || isNumberLiteral(expr) || isStringLiteral(expr)) {
            return expr
        }
        if (expr.type == "id" || expr.type == "array_reference") {
            return this.getEnv(expr);
        }

        if (expr.type == "function_call") {
            const f = functions[expr.func_name].f;
            const param = this.evaluate(expr.param);
            return f(param);
        }

        if (expr.type == "str_slice") {
            let i = this.evaluate(expr.i);
            let j = expr.j == null ? null : this.evaluate(expr.j);
            let s = this.env[expr.id];
            if (j != null) {
                return s.substring(i, j);
            } else {
                return s.charAt(i);
            }
        }
        if (expr.type == "binary_expr") {
            let operation = binaryOperations[expr.operation];
            let l = this.evaluate(expr.l);
            let r = this.evaluate(expr.r);
            return operation(l, r);
        }
        if (expr.type == "unary_expr") {
            let operation = unaryOperations[expr.operation];
            let v = evaluate(expr.operand);
            return operation(v);
        }
        console.error("WDTPDInterpreter::evaluate encountered bad", expr, typeof(expr));
        return null;
    }

    addInputStream(input) {
        this.input.push(...input);
    }

    /**
     * Captures the current state of the program for debugging purposes
     */
    capture(...note) {
        note = note.join(" ");
        this.trace.push({
            note: note,
            env: {...this.env}
        });
    }
}