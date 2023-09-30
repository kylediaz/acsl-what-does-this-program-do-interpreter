// Generated from WDTPD.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'https://cdn.jsdelivr.net/npm/antlr4@4.13.1/+esm'
import WDTPDListener from './WDTPDListener.js';
const serializedATN = [4,1,51,301,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,1,0,1,0,1,1,4,1,67,8,1,11,1,12,1,
68,1,2,1,2,1,2,1,2,1,2,1,2,3,2,77,8,2,1,3,1,3,1,3,5,3,82,8,3,10,3,12,3,85,
9,3,1,4,1,4,1,4,1,5,1,5,4,5,92,8,5,11,5,12,5,93,1,6,1,6,1,6,5,6,99,8,6,10,
6,12,6,102,9,6,1,7,1,7,3,7,106,8,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,3,
8,117,8,8,1,8,3,8,120,8,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,
10,3,10,133,8,10,1,10,1,10,1,10,1,11,5,11,139,8,11,10,11,12,11,142,9,11,
1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,5,13,152,8,13,10,13,12,13,155,9,
13,1,14,1,14,1,14,1,14,1,14,1,14,5,14,163,8,14,10,14,12,14,166,9,14,1,15,
1,15,1,15,1,15,1,15,1,15,5,15,174,8,15,10,15,12,15,177,9,15,1,16,1,16,1,
16,1,16,1,16,1,16,5,16,185,8,16,10,16,12,16,188,9,16,1,17,1,17,1,17,1,17,
1,17,1,17,5,17,196,8,17,10,17,12,17,199,9,17,1,18,1,18,1,18,1,18,1,18,1,
18,5,18,207,8,18,10,18,12,18,210,9,18,1,19,1,19,1,19,1,19,1,19,1,19,5,19,
218,8,19,10,19,12,19,221,9,19,1,20,1,20,1,20,1,20,1,20,1,20,5,20,229,8,20,
10,20,12,20,232,9,20,1,21,1,21,1,21,1,21,1,21,1,21,5,21,240,8,21,10,21,12,
21,243,9,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,252,8,22,3,22,254,8,
22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,265,8,23,1,24,1,24,
1,24,1,24,1,24,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,
27,3,27,284,8,27,1,27,1,27,1,28,1,28,1,29,1,29,1,29,1,29,3,29,294,8,29,1,
30,3,30,297,8,30,1,30,1,30,1,30,0,9,26,28,30,32,34,36,38,40,42,31,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,0,6,1,0,20,21,1,0,16,19,1,0,14,15,1,0,11,13,1,0,5,7,1,0,29,32,305,
0,62,1,0,0,0,2,66,1,0,0,0,4,76,1,0,0,0,6,78,1,0,0,0,8,86,1,0,0,0,10,89,1,
0,0,0,12,95,1,0,0,0,14,105,1,0,0,0,16,110,1,0,0,0,18,121,1,0,0,0,20,126,
1,0,0,0,22,140,1,0,0,0,24,143,1,0,0,0,26,145,1,0,0,0,28,156,1,0,0,0,30,167,
1,0,0,0,32,178,1,0,0,0,34,189,1,0,0,0,36,200,1,0,0,0,38,211,1,0,0,0,40,222,
1,0,0,0,42,233,1,0,0,0,44,253,1,0,0,0,46,264,1,0,0,0,48,266,1,0,0,0,50,271,
1,0,0,0,52,273,1,0,0,0,54,278,1,0,0,0,56,287,1,0,0,0,58,293,1,0,0,0,60,296,
1,0,0,0,62,63,3,2,1,0,63,64,5,0,0,1,64,1,1,0,0,0,65,67,3,4,2,0,66,65,1,0,
0,0,67,68,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,3,1,0,0,0,70,77,3,8,4,0,
71,77,3,10,5,0,72,77,3,16,8,0,73,77,3,18,9,0,74,77,3,20,10,0,75,77,3,12,
6,0,76,70,1,0,0,0,76,71,1,0,0,0,76,72,1,0,0,0,76,73,1,0,0,0,76,74,1,0,0,
0,76,75,1,0,0,0,77,5,1,0,0,0,78,83,3,56,28,0,79,80,5,8,0,0,80,82,3,56,28,
0,81,79,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,7,1,0,0,0,85,
83,1,0,0,0,86,87,5,42,0,0,87,88,3,6,3,0,88,9,1,0,0,0,89,91,5,43,0,0,90,92,
3,24,12,0,91,90,1,0,0,0,92,93,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,11,
1,0,0,0,95,100,3,14,7,0,96,97,5,24,0,0,97,99,3,14,7,0,98,96,1,0,0,0,99,102,
1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,13,1,0,0,0,102,100,1,0,0,0,103,
106,3,56,28,0,104,106,3,52,26,0,105,103,1,0,0,0,105,104,1,0,0,0,106,107,
1,0,0,0,107,108,5,1,0,0,108,109,3,24,12,0,109,15,1,0,0,0,110,111,5,33,0,
0,111,112,3,24,12,0,112,113,5,34,0,0,113,116,3,2,1,0,114,115,5,2,0,0,115,
117,3,2,1,0,116,114,1,0,0,0,116,117,1,0,0,0,117,119,1,0,0,0,118,120,5,35,
0,0,119,118,1,0,0,0,119,120,1,0,0,0,120,17,1,0,0,0,121,122,5,36,0,0,122,
123,3,24,12,0,123,124,3,2,1,0,124,125,5,37,0,0,125,19,1,0,0,0,126,127,5,
38,0,0,127,128,3,14,7,0,128,129,5,39,0,0,129,132,3,24,12,0,130,131,5,40,
0,0,131,133,3,24,12,0,132,130,1,0,0,0,132,133,1,0,0,0,133,134,1,0,0,0,134,
135,3,2,1,0,135,136,5,41,0,0,136,21,1,0,0,0,137,139,3,24,12,0,138,137,1,
0,0,0,139,142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,23,1,0,0,0,142,
140,1,0,0,0,143,144,3,26,13,0,144,25,1,0,0,0,145,146,6,13,-1,0,146,147,3,
28,14,0,147,153,1,0,0,0,148,149,10,1,0,0,149,150,5,23,0,0,150,152,3,26,13,
2,151,148,1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,27,
1,0,0,0,155,153,1,0,0,0,156,157,6,14,-1,0,157,158,3,30,15,0,158,164,1,0,
0,0,159,160,10,1,0,0,160,161,5,22,0,0,161,163,3,30,15,0,162,159,1,0,0,0,
163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,29,1,0,0,0,166,164,1,
0,0,0,167,168,6,15,-1,0,168,169,3,32,16,0,169,175,1,0,0,0,170,171,10,1,0,
0,171,172,5,3,0,0,172,174,3,32,16,0,173,170,1,0,0,0,174,177,1,0,0,0,175,
173,1,0,0,0,175,176,1,0,0,0,176,31,1,0,0,0,177,175,1,0,0,0,178,179,6,16,
-1,0,179,180,3,34,17,0,180,186,1,0,0,0,181,182,10,1,0,0,182,183,5,4,0,0,
183,185,3,34,17,0,184,181,1,0,0,0,185,188,1,0,0,0,186,184,1,0,0,0,186,187,
1,0,0,0,187,33,1,0,0,0,188,186,1,0,0,0,189,190,6,17,-1,0,190,191,3,36,18,
0,191,197,1,0,0,0,192,193,10,1,0,0,193,194,7,0,0,0,194,196,3,36,18,0,195,
192,1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,35,1,0,0,
0,199,197,1,0,0,0,200,201,6,18,-1,0,201,202,3,38,19,0,202,208,1,0,0,0,203,
204,10,1,0,0,204,205,7,1,0,0,205,207,3,38,19,0,206,203,1,0,0,0,207,210,1,
0,0,0,208,206,1,0,0,0,208,209,1,0,0,0,209,37,1,0,0,0,210,208,1,0,0,0,211,
212,6,19,-1,0,212,213,3,40,20,0,213,219,1,0,0,0,214,215,10,1,0,0,215,216,
7,2,0,0,216,218,3,40,20,0,217,214,1,0,0,0,218,221,1,0,0,0,219,217,1,0,0,
0,219,220,1,0,0,0,220,39,1,0,0,0,221,219,1,0,0,0,222,223,6,20,-1,0,223,224,
3,42,21,0,224,230,1,0,0,0,225,226,10,1,0,0,226,227,7,3,0,0,227,229,3,42,
21,0,228,225,1,0,0,0,229,232,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,
41,1,0,0,0,232,230,1,0,0,0,233,234,6,21,-1,0,234,235,3,44,22,0,235,241,1,
0,0,0,236,237,10,1,0,0,237,238,7,4,0,0,238,240,3,44,22,0,239,236,1,0,0,0,
240,243,1,0,0,0,241,239,1,0,0,0,241,242,1,0,0,0,242,43,1,0,0,0,243,241,1,
0,0,0,244,254,3,46,23,0,245,246,5,14,0,0,246,252,3,44,22,0,247,248,5,15,
0,0,248,252,3,44,22,0,249,250,5,9,0,0,250,252,3,44,22,0,251,245,1,0,0,0,
251,247,1,0,0,0,251,249,1,0,0,0,252,254,1,0,0,0,253,244,1,0,0,0,253,251,
1,0,0,0,254,45,1,0,0,0,255,265,3,56,28,0,256,265,3,58,29,0,257,265,3,48,
24,0,258,265,3,52,26,0,259,265,3,54,27,0,260,261,5,25,0,0,261,262,3,24,12,
0,262,263,5,26,0,0,263,265,1,0,0,0,264,255,1,0,0,0,264,256,1,0,0,0,264,257,
1,0,0,0,264,258,1,0,0,0,264,259,1,0,0,0,264,260,1,0,0,0,265,47,1,0,0,0,266,
267,3,50,25,0,267,268,5,25,0,0,268,269,3,24,12,0,269,270,5,26,0,0,270,49,
1,0,0,0,271,272,7,5,0,0,272,51,1,0,0,0,273,274,3,56,28,0,274,275,5,25,0,
0,275,276,3,38,19,0,276,277,5,26,0,0,277,53,1,0,0,0,278,279,3,56,28,0,279,
280,5,27,0,0,280,283,3,24,12,0,281,282,5,24,0,0,282,284,3,24,12,0,283,281,
1,0,0,0,283,284,1,0,0,0,284,285,1,0,0,0,285,286,5,28,0,0,286,55,1,0,0,0,
287,288,5,44,0,0,288,57,1,0,0,0,289,294,3,60,30,0,290,294,5,45,0,0,291,294,
5,47,0,0,292,294,5,48,0,0,293,289,1,0,0,0,293,290,1,0,0,0,293,291,1,0,0,
0,293,292,1,0,0,0,294,59,1,0,0,0,295,297,5,15,0,0,296,295,1,0,0,0,296,297,
1,0,0,0,297,298,1,0,0,0,298,299,5,46,0,0,299,61,1,0,0,0,25,68,76,83,93,100,
105,116,119,132,140,153,164,175,186,197,208,219,230,241,251,253,264,283,
293,296];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class WDTPDParser extends antlr4.Parser {

    static grammarFileName = "WDTPD.g4";
    static literalNames = [ null, "'='", "'ELSE'", "'|'", "'&'", "'^'", 
                            "'\\u2191'", "'**'", "','", "'!'", null, "'*'", 
                            "'/'", "'%'", "'+'", "'-'", "'<'", "'>'", "'<='", 
                            "'>='", "'=='", "'!='", "'&&'", "'||'", "':'", 
                            "'('", "')'", "'['", "']'", "'abs'", "'len'", 
                            "'sqrt'", "'int'", "'IF'", "'THEN'", "'END IF'", 
                            "'WHILE'", "'END WHILE'", "'FOR'", "'TO'", "'STEP'", 
                            "'NEXT'", "'INPUT'", "'OUTPUT'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "COMMA", "NOT", "EXPONENT", "STAR", "SLASH", 
                             "PERCENT", "PLUS", "DASH", "LT", "GT", "LTE", 
                             "GTE", "DOUBLE_EQUAL", "DNE", "DOUBLE_AMPERSAND", 
                             "DOUBLE_PIPE", "COLON", "OPEN_PAREN", "CLOSE_PAREN", 
                             "OPEN_BRACKET", "CLOSE_BRACKET", "ABS", "LEN", 
                             "SQRT", "INT_FUNC", "IF", "THEN", "END_IF", 
                             "WHILE", "END_WHILE", "FOR", "TO", "STEP", 
                             "NEXT", "INPUT", "OUTPUT", "ID", "STRING", 
                             "INTEGER", "BOOLEAN", "NULL", "COMMENT", "WS", 
                             "NL" ];
    static ruleNames = [ "prog", "stmt_list", "stmt", "id_list", "input", 
                         "output", "assignment_list", "assignment", "if_stmt", 
                         "while_stmt", "for_loop_stmt", "params", "expression", 
                         "conditional_or_expr", "conditional_and_expr", 
                         "or_expr", "and_expr", "equality_expr", "relational_expr", 
                         "additive_expr", "multiplicative_expr", "exponent_expr", 
                         "unary_expr", "primary_expr", "function_call", 
                         "function_name", "array_reference", "str_slice", 
                         "id", "literal", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = WDTPDParser.ruleNames;
        this.literalNames = WDTPDParser.literalNames;
        this.symbolicNames = WDTPDParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 13:
    	    		return this.conditional_or_expr_sempred(localctx, predIndex);
    	case 14:
    	    		return this.conditional_and_expr_sempred(localctx, predIndex);
    	case 15:
    	    		return this.or_expr_sempred(localctx, predIndex);
    	case 16:
    	    		return this.and_expr_sempred(localctx, predIndex);
    	case 17:
    	    		return this.equality_expr_sempred(localctx, predIndex);
    	case 18:
    	    		return this.relational_expr_sempred(localctx, predIndex);
    	case 19:
    	    		return this.additive_expr_sempred(localctx, predIndex);
    	case 20:
    	    		return this.multiplicative_expr_sempred(localctx, predIndex);
    	case 21:
    	    		return this.exponent_expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    conditional_or_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    conditional_and_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    or_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    and_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    equality_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 4:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    relational_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 5:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    additive_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 6:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    multiplicative_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 7:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    exponent_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 8:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, WDTPDParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.stmt_list();
	        this.state = 63;
	        this.match(WDTPDParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stmt_list() {
	    let localctx = new Stmt_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, WDTPDParser.RULE_stmt_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 65;
	        		this.stmt();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 68; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,0, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stmt() {
	    let localctx = new StmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, WDTPDParser.RULE_stmt);
	    try {
	        this.state = 76;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.input();
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.output();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 72;
	            this.if_stmt();
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 73;
	            this.while_stmt();
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 74;
	            this.for_loop_stmt();
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 75;
	            this.assignment_list();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id_list() {
	    let localctx = new Id_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, WDTPDParser.RULE_id_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.id();
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 79;
	            this.match(WDTPDParser.COMMA);
	            this.state = 80;
	            this.id();
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	input() {
	    let localctx = new InputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, WDTPDParser.RULE_input);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(WDTPDParser.INPUT);
	        this.state = 87;
	        this.id_list();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	output() {
	    let localctx = new OutputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, WDTPDParser.RULE_output);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(WDTPDParser.OUTPUT);
	        this.state = 91; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 90;
	        		this.expression();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 93; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment_list() {
	    let localctx = new Assignment_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, WDTPDParser.RULE_assignment_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.assignment();
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===24) {
	            this.state = 96;
	            this.match(WDTPDParser.COLON);
	            this.state = 97;
	            this.assignment();
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, WDTPDParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 103;
	            this.id();
	            break;

	        case 2:
	            this.state = 104;
	            this.array_reference();
	            break;

	        }
	        this.state = 107;
	        this.match(WDTPDParser.T__0);
	        this.state = 108;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_stmt() {
	    let localctx = new If_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, WDTPDParser.RULE_if_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(WDTPDParser.IF);
	        this.state = 111;
	        this.expression();
	        this.state = 112;
	        this.match(WDTPDParser.THEN);
	        this.state = 113;
	        this.stmt_list();
	        this.state = 116;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 114;
	            this.match(WDTPDParser.T__1);
	            this.state = 115;
	            this.stmt_list();

	        }
	        this.state = 119;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 118;
	            this.match(WDTPDParser.END_IF);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	while_stmt() {
	    let localctx = new While_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, WDTPDParser.RULE_while_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(WDTPDParser.WHILE);
	        this.state = 122;
	        this.expression();
	        this.state = 123;
	        this.stmt_list();
	        this.state = 124;
	        this.match(WDTPDParser.END_WHILE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	for_loop_stmt() {
	    let localctx = new For_loop_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, WDTPDParser.RULE_for_loop_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(WDTPDParser.FOR);
	        this.state = 127;
	        this.assignment();
	        this.state = 128;
	        this.match(WDTPDParser.TO);
	        this.state = 129;
	        this.expression();
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===40) {
	            this.state = 130;
	            this.match(WDTPDParser.STEP);
	            this.state = 131;
	            this.expression();
	        }

	        this.state = 134;
	        this.stmt_list();
	        this.state = 135;
	        this.match(WDTPDParser.NEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	params() {
	    let localctx = new ParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, WDTPDParser.RULE_params);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3791700480) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 126977) !== 0)) {
	            this.state = 137;
	            this.expression();
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, WDTPDParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.conditional_or_expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	conditional_or_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Conditional_or_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, WDTPDParser.RULE_conditional_or_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.conditional_and_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 153;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Conditional_or_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_conditional_or_expr);
	                this.state = 148;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 149;
	                this.match(WDTPDParser.DOUBLE_PIPE);
	                this.state = 150;
	                this.conditional_or_expr(2); 
	            }
	            this.state = 155;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	conditional_and_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Conditional_and_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, WDTPDParser.RULE_conditional_and_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.or_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 164;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Conditional_and_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_conditional_and_expr);
	                this.state = 159;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 160;
	                this.match(WDTPDParser.DOUBLE_AMPERSAND);
	                this.state = 161;
	                this.or_expr(0); 
	            }
	            this.state = 166;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	or_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Or_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 30;
	    this.enterRecursionRule(localctx, 30, WDTPDParser.RULE_or_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.and_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 175;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Or_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_or_expr);
	                this.state = 170;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 171;
	                this.match(WDTPDParser.T__2);
	                this.state = 172;
	                this.and_expr(0); 
	            }
	            this.state = 177;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	and_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new And_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 32;
	    this.enterRecursionRule(localctx, 32, WDTPDParser.RULE_and_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.equality_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 186;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new And_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_and_expr);
	                this.state = 181;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 182;
	                this.match(WDTPDParser.T__3);
	                this.state = 183;
	                this.equality_expr(0); 
	            }
	            this.state = 188;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	equality_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Equality_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 34;
	    this.enterRecursionRule(localctx, 34, WDTPDParser.RULE_equality_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.relational_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 197;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Equality_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_equality_expr);
	                this.state = 192;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 193;
	                _la = this._input.LA(1);
	                if(!(_la===20 || _la===21)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 194;
	                this.relational_expr(0); 
	            }
	            this.state = 199;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	relational_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Relational_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 36;
	    this.enterRecursionRule(localctx, 36, WDTPDParser.RULE_relational_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.additive_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 208;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Relational_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_relational_expr);
	                this.state = 203;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 204;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 983040) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 205;
	                this.additive_expr(0); 
	            }
	            this.state = 210;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	additive_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Additive_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, WDTPDParser.RULE_additive_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.multiplicative_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 219;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Additive_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_additive_expr);
	                this.state = 214;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 215;
	                _la = this._input.LA(1);
	                if(!(_la===14 || _la===15)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 216;
	                this.multiplicative_expr(0); 
	            }
	            this.state = 221;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	multiplicative_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Multiplicative_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 40;
	    this.enterRecursionRule(localctx, 40, WDTPDParser.RULE_multiplicative_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.exponent_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 230;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Multiplicative_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_multiplicative_expr);
	                this.state = 225;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 226;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14336) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 227;
	                this.exponent_expr(0); 
	            }
	            this.state = 232;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	exponent_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Exponent_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 42;
	    this.enterRecursionRule(localctx, 42, WDTPDParser.RULE_exponent_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.unary_expr();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 241;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Exponent_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_exponent_expr);
	                this.state = 236;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 237;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 238;
	                this.unary_expr(); 
	            }
	            this.state = 243;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	unary_expr() {
	    let localctx = new Unary_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, WDTPDParser.RULE_unary_expr);
	    try {
	        this.state = 253;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 244;
	            this.primary_expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 251;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 14:
	                this.state = 245;
	                this.match(WDTPDParser.PLUS);
	                this.state = 246;
	                this.unary_expr();
	                break;
	            case 15:
	                this.state = 247;
	                this.match(WDTPDParser.DASH);
	                this.state = 248;
	                this.unary_expr();
	                break;
	            case 9:
	                this.state = 249;
	                this.match(WDTPDParser.NOT);
	                this.state = 250;
	                this.unary_expr();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary_expr() {
	    let localctx = new Primary_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, WDTPDParser.RULE_primary_expr);
	    try {
	        this.state = 264;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 255;
	            this.id();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 256;
	            this.literal();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 257;
	            this.function_call();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 258;
	            this.array_reference();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 259;
	            this.str_slice();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 260;
	            this.match(WDTPDParser.OPEN_PAREN);
	            this.state = 261;
	            this.expression();
	            this.state = 262;
	            this.match(WDTPDParser.CLOSE_PAREN);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_call() {
	    let localctx = new Function_callContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, WDTPDParser.RULE_function_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        this.function_name();
	        this.state = 267;
	        this.match(WDTPDParser.OPEN_PAREN);
	        this.state = 268;
	        this.expression();
	        this.state = 269;
	        this.match(WDTPDParser.CLOSE_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_name() {
	    let localctx = new Function_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, WDTPDParser.RULE_function_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        _la = this._input.LA(1);
	        if(!(((((_la - 29)) & ~0x1f) === 0 && ((1 << (_la - 29)) & 15) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array_reference() {
	    let localctx = new Array_referenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, WDTPDParser.RULE_array_reference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.id();
	        this.state = 274;
	        this.match(WDTPDParser.OPEN_PAREN);
	        this.state = 275;
	        this.additive_expr(0);
	        this.state = 276;
	        this.match(WDTPDParser.CLOSE_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	str_slice() {
	    let localctx = new Str_sliceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, WDTPDParser.RULE_str_slice);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.id();
	        this.state = 279;
	        this.match(WDTPDParser.OPEN_BRACKET);
	        this.state = 280;
	        this.expression();
	        this.state = 283;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 281;
	            this.match(WDTPDParser.COLON);
	            this.state = 282;
	            this.expression();
	        }

	        this.state = 285;
	        this.match(WDTPDParser.CLOSE_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, WDTPDParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.match(WDTPDParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, WDTPDParser.RULE_literal);
	    try {
	        this.state = 293;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	        case 46:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 289;
	            this.number();
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 290;
	            this.match(WDTPDParser.STRING);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 291;
	            this.match(WDTPDParser.BOOLEAN);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 292;
	            this.match(WDTPDParser.NULL);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, WDTPDParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 295;
	            this.match(WDTPDParser.DASH);
	        }

	        this.state = 298;
	        this.match(WDTPDParser.INTEGER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

WDTPDParser.EOF = antlr4.Token.EOF;
WDTPDParser.T__0 = 1;
WDTPDParser.T__1 = 2;
WDTPDParser.T__2 = 3;
WDTPDParser.T__3 = 4;
WDTPDParser.T__4 = 5;
WDTPDParser.T__5 = 6;
WDTPDParser.T__6 = 7;
WDTPDParser.COMMA = 8;
WDTPDParser.NOT = 9;
WDTPDParser.EXPONENT = 10;
WDTPDParser.STAR = 11;
WDTPDParser.SLASH = 12;
WDTPDParser.PERCENT = 13;
WDTPDParser.PLUS = 14;
WDTPDParser.DASH = 15;
WDTPDParser.LT = 16;
WDTPDParser.GT = 17;
WDTPDParser.LTE = 18;
WDTPDParser.GTE = 19;
WDTPDParser.DOUBLE_EQUAL = 20;
WDTPDParser.DNE = 21;
WDTPDParser.DOUBLE_AMPERSAND = 22;
WDTPDParser.DOUBLE_PIPE = 23;
WDTPDParser.COLON = 24;
WDTPDParser.OPEN_PAREN = 25;
WDTPDParser.CLOSE_PAREN = 26;
WDTPDParser.OPEN_BRACKET = 27;
WDTPDParser.CLOSE_BRACKET = 28;
WDTPDParser.ABS = 29;
WDTPDParser.LEN = 30;
WDTPDParser.SQRT = 31;
WDTPDParser.INT_FUNC = 32;
WDTPDParser.IF = 33;
WDTPDParser.THEN = 34;
WDTPDParser.END_IF = 35;
WDTPDParser.WHILE = 36;
WDTPDParser.END_WHILE = 37;
WDTPDParser.FOR = 38;
WDTPDParser.TO = 39;
WDTPDParser.STEP = 40;
WDTPDParser.NEXT = 41;
WDTPDParser.INPUT = 42;
WDTPDParser.OUTPUT = 43;
WDTPDParser.ID = 44;
WDTPDParser.STRING = 45;
WDTPDParser.INTEGER = 46;
WDTPDParser.BOOLEAN = 47;
WDTPDParser.NULL = 48;
WDTPDParser.COMMENT = 49;
WDTPDParser.WS = 50;
WDTPDParser.NL = 51;

WDTPDParser.RULE_prog = 0;
WDTPDParser.RULE_stmt_list = 1;
WDTPDParser.RULE_stmt = 2;
WDTPDParser.RULE_id_list = 3;
WDTPDParser.RULE_input = 4;
WDTPDParser.RULE_output = 5;
WDTPDParser.RULE_assignment_list = 6;
WDTPDParser.RULE_assignment = 7;
WDTPDParser.RULE_if_stmt = 8;
WDTPDParser.RULE_while_stmt = 9;
WDTPDParser.RULE_for_loop_stmt = 10;
WDTPDParser.RULE_params = 11;
WDTPDParser.RULE_expression = 12;
WDTPDParser.RULE_conditional_or_expr = 13;
WDTPDParser.RULE_conditional_and_expr = 14;
WDTPDParser.RULE_or_expr = 15;
WDTPDParser.RULE_and_expr = 16;
WDTPDParser.RULE_equality_expr = 17;
WDTPDParser.RULE_relational_expr = 18;
WDTPDParser.RULE_additive_expr = 19;
WDTPDParser.RULE_multiplicative_expr = 20;
WDTPDParser.RULE_exponent_expr = 21;
WDTPDParser.RULE_unary_expr = 22;
WDTPDParser.RULE_primary_expr = 23;
WDTPDParser.RULE_function_call = 24;
WDTPDParser.RULE_function_name = 25;
WDTPDParser.RULE_array_reference = 26;
WDTPDParser.RULE_str_slice = 27;
WDTPDParser.RULE_id = 28;
WDTPDParser.RULE_literal = 29;
WDTPDParser.RULE_number = 30;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_prog;
    }

	stmt_list() {
	    return this.getTypedRuleContext(Stmt_listContext,0);
	};

	EOF() {
	    return this.getToken(WDTPDParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitProg(this);
		}
	}


}



class Stmt_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_stmt_list;
    }

	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterStmt_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitStmt_list(this);
		}
	}


}



class StmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_stmt;
    }

	input() {
	    return this.getTypedRuleContext(InputContext,0);
	};

	output() {
	    return this.getTypedRuleContext(OutputContext,0);
	};

	if_stmt() {
	    return this.getTypedRuleContext(If_stmtContext,0);
	};

	while_stmt() {
	    return this.getTypedRuleContext(While_stmtContext,0);
	};

	for_loop_stmt() {
	    return this.getTypedRuleContext(For_loop_stmtContext,0);
	};

	assignment_list() {
	    return this.getTypedRuleContext(Assignment_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitStmt(this);
		}
	}


}



class Id_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_id_list;
    }

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WDTPDParser.COMMA);
	    } else {
	        return this.getToken(WDTPDParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterId_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitId_list(this);
		}
	}


}



class InputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_input;
    }

	INPUT() {
	    return this.getToken(WDTPDParser.INPUT, 0);
	};

	id_list() {
	    return this.getTypedRuleContext(Id_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterInput(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitInput(this);
		}
	}


}



class OutputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_output;
    }

	OUTPUT() {
	    return this.getToken(WDTPDParser.OUTPUT, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterOutput(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitOutput(this);
		}
	}


}



class Assignment_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_assignment_list;
    }

	assignment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentContext,i);
	    }
	};

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WDTPDParser.COLON);
	    } else {
	        return this.getToken(WDTPDParser.COLON, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterAssignment_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitAssignment_list(this);
		}
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_assignment;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	array_reference() {
	    return this.getTypedRuleContext(Array_referenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitAssignment(this);
		}
	}


}



class If_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_if_stmt;
    }

	IF() {
	    return this.getToken(WDTPDParser.IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	THEN() {
	    return this.getToken(WDTPDParser.THEN, 0);
	};

	stmt_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Stmt_listContext);
	    } else {
	        return this.getTypedRuleContext(Stmt_listContext,i);
	    }
	};

	END_IF() {
	    return this.getToken(WDTPDParser.END_IF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterIf_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitIf_stmt(this);
		}
	}


}



class While_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_while_stmt;
    }

	WHILE() {
	    return this.getToken(WDTPDParser.WHILE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	stmt_list() {
	    return this.getTypedRuleContext(Stmt_listContext,0);
	};

	END_WHILE() {
	    return this.getToken(WDTPDParser.END_WHILE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterWhile_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitWhile_stmt(this);
		}
	}


}



class For_loop_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_for_loop_stmt;
    }

	FOR() {
	    return this.getToken(WDTPDParser.FOR, 0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	TO() {
	    return this.getToken(WDTPDParser.TO, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	stmt_list() {
	    return this.getTypedRuleContext(Stmt_listContext,0);
	};

	NEXT() {
	    return this.getToken(WDTPDParser.NEXT, 0);
	};

	STEP() {
	    return this.getToken(WDTPDParser.STEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterFor_loop_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitFor_loop_stmt(this);
		}
	}


}



class ParamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_params;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterParams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitParams(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_expression;
    }

	conditional_or_expr() {
	    return this.getTypedRuleContext(Conditional_or_exprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitExpression(this);
		}
	}


}



class Conditional_or_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_conditional_or_expr;
    }

	conditional_and_expr() {
	    return this.getTypedRuleContext(Conditional_and_exprContext,0);
	};

	conditional_or_expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Conditional_or_exprContext);
	    } else {
	        return this.getTypedRuleContext(Conditional_or_exprContext,i);
	    }
	};

	DOUBLE_PIPE() {
	    return this.getToken(WDTPDParser.DOUBLE_PIPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterConditional_or_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitConditional_or_expr(this);
		}
	}


}



class Conditional_and_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_conditional_and_expr;
    }

	or_expr() {
	    return this.getTypedRuleContext(Or_exprContext,0);
	};

	conditional_and_expr() {
	    return this.getTypedRuleContext(Conditional_and_exprContext,0);
	};

	DOUBLE_AMPERSAND() {
	    return this.getToken(WDTPDParser.DOUBLE_AMPERSAND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterConditional_and_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitConditional_and_expr(this);
		}
	}


}



class Or_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_or_expr;
    }

	and_expr() {
	    return this.getTypedRuleContext(And_exprContext,0);
	};

	or_expr() {
	    return this.getTypedRuleContext(Or_exprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterOr_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitOr_expr(this);
		}
	}


}



class And_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_and_expr;
    }

	equality_expr() {
	    return this.getTypedRuleContext(Equality_exprContext,0);
	};

	and_expr() {
	    return this.getTypedRuleContext(And_exprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterAnd_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitAnd_expr(this);
		}
	}


}



class Equality_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_equality_expr;
    }

	relational_expr() {
	    return this.getTypedRuleContext(Relational_exprContext,0);
	};

	equality_expr() {
	    return this.getTypedRuleContext(Equality_exprContext,0);
	};

	DOUBLE_EQUAL() {
	    return this.getToken(WDTPDParser.DOUBLE_EQUAL, 0);
	};

	DNE() {
	    return this.getToken(WDTPDParser.DNE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterEquality_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitEquality_expr(this);
		}
	}


}



class Relational_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_relational_expr;
    }

	additive_expr() {
	    return this.getTypedRuleContext(Additive_exprContext,0);
	};

	relational_expr() {
	    return this.getTypedRuleContext(Relational_exprContext,0);
	};

	LT() {
	    return this.getToken(WDTPDParser.LT, 0);
	};

	GT() {
	    return this.getToken(WDTPDParser.GT, 0);
	};

	GTE() {
	    return this.getToken(WDTPDParser.GTE, 0);
	};

	LTE() {
	    return this.getToken(WDTPDParser.LTE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterRelational_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitRelational_expr(this);
		}
	}


}



class Additive_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_additive_expr;
    }

	multiplicative_expr() {
	    return this.getTypedRuleContext(Multiplicative_exprContext,0);
	};

	additive_expr() {
	    return this.getTypedRuleContext(Additive_exprContext,0);
	};

	PLUS() {
	    return this.getToken(WDTPDParser.PLUS, 0);
	};

	DASH() {
	    return this.getToken(WDTPDParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterAdditive_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitAdditive_expr(this);
		}
	}


}



class Multiplicative_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_multiplicative_expr;
    }

	exponent_expr() {
	    return this.getTypedRuleContext(Exponent_exprContext,0);
	};

	multiplicative_expr() {
	    return this.getTypedRuleContext(Multiplicative_exprContext,0);
	};

	STAR() {
	    return this.getToken(WDTPDParser.STAR, 0);
	};

	SLASH() {
	    return this.getToken(WDTPDParser.SLASH, 0);
	};

	PERCENT() {
	    return this.getToken(WDTPDParser.PERCENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterMultiplicative_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitMultiplicative_expr(this);
		}
	}


}



class Exponent_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_exponent_expr;
    }

	unary_expr() {
	    return this.getTypedRuleContext(Unary_exprContext,0);
	};

	exponent_expr() {
	    return this.getTypedRuleContext(Exponent_exprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterExponent_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitExponent_expr(this);
		}
	}


}



class Unary_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_unary_expr;
    }

	primary_expr() {
	    return this.getTypedRuleContext(Primary_exprContext,0);
	};

	PLUS() {
	    return this.getToken(WDTPDParser.PLUS, 0);
	};

	unary_expr() {
	    return this.getTypedRuleContext(Unary_exprContext,0);
	};

	DASH() {
	    return this.getToken(WDTPDParser.DASH, 0);
	};

	NOT() {
	    return this.getToken(WDTPDParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterUnary_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitUnary_expr(this);
		}
	}


}



class Primary_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_primary_expr;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	function_call() {
	    return this.getTypedRuleContext(Function_callContext,0);
	};

	array_reference() {
	    return this.getTypedRuleContext(Array_referenceContext,0);
	};

	str_slice() {
	    return this.getTypedRuleContext(Str_sliceContext,0);
	};

	OPEN_PAREN() {
	    return this.getToken(WDTPDParser.OPEN_PAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(WDTPDParser.CLOSE_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterPrimary_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitPrimary_expr(this);
		}
	}


}



class Function_callContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_function_call;
    }

	function_name() {
	    return this.getTypedRuleContext(Function_nameContext,0);
	};

	OPEN_PAREN() {
	    return this.getToken(WDTPDParser.OPEN_PAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(WDTPDParser.CLOSE_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterFunction_call(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitFunction_call(this);
		}
	}


}



class Function_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_function_name;
    }

	ABS() {
	    return this.getToken(WDTPDParser.ABS, 0);
	};

	INT_FUNC() {
	    return this.getToken(WDTPDParser.INT_FUNC, 0);
	};

	SQRT() {
	    return this.getToken(WDTPDParser.SQRT, 0);
	};

	LEN() {
	    return this.getToken(WDTPDParser.LEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterFunction_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitFunction_name(this);
		}
	}


}



class Array_referenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_array_reference;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	OPEN_PAREN() {
	    return this.getToken(WDTPDParser.OPEN_PAREN, 0);
	};

	additive_expr() {
	    return this.getTypedRuleContext(Additive_exprContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(WDTPDParser.CLOSE_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterArray_reference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitArray_reference(this);
		}
	}


}



class Str_sliceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_str_slice;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	OPEN_BRACKET() {
	    return this.getToken(WDTPDParser.OPEN_BRACKET, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	CLOSE_BRACKET() {
	    return this.getToken(WDTPDParser.CLOSE_BRACKET, 0);
	};

	COLON() {
	    return this.getToken(WDTPDParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterStr_slice(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitStr_slice(this);
		}
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_id;
    }

	ID() {
	    return this.getToken(WDTPDParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitId(this);
		}
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_literal;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	STRING() {
	    return this.getToken(WDTPDParser.STRING, 0);
	};

	BOOLEAN() {
	    return this.getToken(WDTPDParser.BOOLEAN, 0);
	};

	NULL() {
	    return this.getToken(WDTPDParser.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_number;
    }

	INTEGER() {
	    return this.getToken(WDTPDParser.INTEGER, 0);
	};

	DASH() {
	    return this.getToken(WDTPDParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitNumber(this);
		}
	}


}




WDTPDParser.ProgContext = ProgContext; 
WDTPDParser.Stmt_listContext = Stmt_listContext; 
WDTPDParser.StmtContext = StmtContext; 
WDTPDParser.Id_listContext = Id_listContext; 
WDTPDParser.InputContext = InputContext; 
WDTPDParser.OutputContext = OutputContext; 
WDTPDParser.Assignment_listContext = Assignment_listContext; 
WDTPDParser.AssignmentContext = AssignmentContext; 
WDTPDParser.If_stmtContext = If_stmtContext; 
WDTPDParser.While_stmtContext = While_stmtContext; 
WDTPDParser.For_loop_stmtContext = For_loop_stmtContext; 
WDTPDParser.ParamsContext = ParamsContext; 
WDTPDParser.ExpressionContext = ExpressionContext; 
WDTPDParser.Conditional_or_exprContext = Conditional_or_exprContext; 
WDTPDParser.Conditional_and_exprContext = Conditional_and_exprContext; 
WDTPDParser.Or_exprContext = Or_exprContext; 
WDTPDParser.And_exprContext = And_exprContext; 
WDTPDParser.Equality_exprContext = Equality_exprContext; 
WDTPDParser.Relational_exprContext = Relational_exprContext; 
WDTPDParser.Additive_exprContext = Additive_exprContext; 
WDTPDParser.Multiplicative_exprContext = Multiplicative_exprContext; 
WDTPDParser.Exponent_exprContext = Exponent_exprContext; 
WDTPDParser.Unary_exprContext = Unary_exprContext; 
WDTPDParser.Primary_exprContext = Primary_exprContext; 
WDTPDParser.Function_callContext = Function_callContext; 
WDTPDParser.Function_nameContext = Function_nameContext; 
WDTPDParser.Array_referenceContext = Array_referenceContext; 
WDTPDParser.Str_sliceContext = Str_sliceContext; 
WDTPDParser.IdContext = IdContext; 
WDTPDParser.LiteralContext = LiteralContext; 
WDTPDParser.NumberContext = NumberContext; 
