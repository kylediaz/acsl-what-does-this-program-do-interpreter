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

        this.input = null;
        this.output = console.log;

        this.maxExecutions = 100;
        this.executions = 0;
    }

    run(code) {
        let program = parse(code);

        this.trace = [];
        this.capture("Start program");
        try {
            program.forEach((stmt) => this.execute(stmt));
        } catch (err) {
            console.error(err);
        }
        this.capture("End program");
    }

    // Env: variable names are case insensitive

    updateEnv(key, value) {
        if (key.type == "id") {
            this.env[key.id] = value;
        } else {
            console.error("WDTPDInterpreter::updateEnv unimplemented", key);
        }
    }

    getEnv(key) {
        return this.env[key.id];
    }

    executeStmts(stmts) {
        stmts.forEach((s) => this.execute(s))
    }

    execute(stmt) {
        this.executions += 1;
        if (this.executions >= this.maxExecutions) {
            this.stopped = true;
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
                    this.executeStmts(stmt.stmts);
                }
                break;
            case "while_loop":
                let conditionExpr = stmt.condition;
                let whileLoopBody = stmt.stmts;
                while (this.stopped == false && this.evaluate(conditionExpr)) {
                    this.executeStmts(whileLoopBody);
                }
                break;
            case "for_loop":
                let forLoopInitAssignment = stmt.init;
                let key = forLoopInitAssignment.leftHandSide;
                let stopCondExpr = stmt.stopCond;
                let stepExpr = stmt.step == null ? 1 : stmt.step;
                let forLoopBody = stmt.stmts;

                this.execute(forLoopInitAssignment);
                this.capture("Starting for loop", this.evaluate(key), "to", this.evaluate(stopCondExpr), "step", this.evaluate(stepExpr));

                let LTE = () => this.evaluate(key) <= this.evaluate(stopCondExpr);
                let GTE = () => this.evaluate(key) >= this.evaluate(stopCondExpr);
                let forLoopCondition = this.evaluate(key) < this.evaluate(stopCondExpr) ? LTE : GTE;
                while (forLoopCondition()) {
                    this.capture("For loop body");
                    this.executeStmts(forLoopBody);
                    this.updateEnv(key, this.evaluate(key) + this.evaluate(stepExpr));
                }
                this.capture("Exit for loop");
                break;
            case "input":
                break;
            case "output":
                let outputExprs = stmt.exprs;
                let outputValues = outputExprs.map((e) => this.evaluate(e));
                outputValues.forEach(this.output)
                break;
            default:
                console.error("Unimplemented execution type", stmt.type);
        }
    }

    evaluate(expr) { 
        if (!expr || isNumberLiteral(expr) || isStringLiteral(expr)) {
            return expr
        }
        if (expr.type == "id") {
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