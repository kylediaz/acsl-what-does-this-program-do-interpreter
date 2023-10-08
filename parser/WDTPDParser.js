// Generated from WDTPD.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'https://cdn.jsdelivr.net/npm/antlr4@4.13.1/+esm'
import WDTPDListener from './WDTPDListener.js';
const serializedATN = [4,1,58,340,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,1,0,1,0,1,1,1,1,1,1,3,1,80,8,1,5,1,82,8,1,10,1,12,
1,85,9,1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,93,8,2,1,3,1,3,1,3,5,3,98,8,3,10,3,
12,3,101,9,3,1,4,1,4,1,4,5,4,106,8,4,10,4,12,4,109,9,4,1,5,1,5,1,5,1,6,1,
6,1,6,1,7,1,7,1,7,5,7,120,8,7,10,7,12,7,123,9,7,1,8,1,8,1,8,1,8,1,9,1,9,
3,9,131,8,9,1,10,1,10,3,10,135,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,3,11,145,8,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,3,12,155,8,12,1,
13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,3,14,169,8,14,
1,14,1,14,1,14,1,14,1,15,5,15,176,8,15,10,15,12,15,179,9,15,1,16,1,16,1,
17,1,17,1,17,1,17,1,17,1,17,5,17,189,8,17,10,17,12,17,192,9,17,1,18,1,18,
1,18,1,18,1,18,1,18,5,18,200,8,18,10,18,12,18,203,9,18,1,19,1,19,1,19,1,
19,1,19,1,19,5,19,211,8,19,10,19,12,19,214,9,19,1,20,1,20,1,20,1,20,1,20,
1,20,5,20,222,8,20,10,20,12,20,225,9,20,1,21,1,21,1,21,1,21,1,21,1,21,5,
21,233,8,21,10,21,12,21,236,9,21,1,22,1,22,1,22,1,22,1,22,1,22,5,22,244,
8,22,10,22,12,22,247,9,22,1,23,1,23,1,23,1,23,1,23,1,23,5,23,255,8,23,10,
23,12,23,258,9,23,1,24,1,24,1,24,1,24,1,24,1,24,5,24,266,8,24,10,24,12,24,
269,9,24,1,25,1,25,1,25,1,25,1,25,1,25,5,25,277,8,25,10,25,12,25,280,9,25,
1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,289,8,26,3,26,291,8,26,1,27,1,27,
1,27,1,27,1,27,3,27,298,8,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,
1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,3,32,321,8,32,
1,32,1,32,1,33,1,33,1,34,1,34,1,34,1,34,3,34,331,8,34,1,35,3,35,334,8,35,
1,35,1,35,1,36,1,36,1,36,0,9,34,36,38,40,42,44,46,48,50,37,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
60,62,64,66,68,70,72,0,6,1,0,5,6,2,0,7,8,21,22,1,0,19,20,1,0,16,18,1,0,9,
11,1,0,36,39,339,0,74,1,0,0,0,2,83,1,0,0,0,4,92,1,0,0,0,6,94,1,0,0,0,8,102,
1,0,0,0,10,110,1,0,0,0,12,113,1,0,0,0,14,116,1,0,0,0,16,124,1,0,0,0,18,130,
1,0,0,0,20,134,1,0,0,0,22,136,1,0,0,0,24,148,1,0,0,0,26,156,1,0,0,0,28,162,
1,0,0,0,30,177,1,0,0,0,32,180,1,0,0,0,34,182,1,0,0,0,36,193,1,0,0,0,38,204,
1,0,0,0,40,215,1,0,0,0,42,226,1,0,0,0,44,237,1,0,0,0,46,248,1,0,0,0,48,259,
1,0,0,0,50,270,1,0,0,0,52,290,1,0,0,0,54,297,1,0,0,0,56,299,1,0,0,0,58,303,
1,0,0,0,60,308,1,0,0,0,62,310,1,0,0,0,64,315,1,0,0,0,66,324,1,0,0,0,68,330,
1,0,0,0,70,333,1,0,0,0,72,337,1,0,0,0,74,75,3,2,1,0,75,1,1,0,0,0,76,79,3,
4,2,0,77,80,3,72,36,0,78,80,5,0,0,1,79,77,1,0,0,0,79,78,1,0,0,0,80,82,1,
0,0,0,81,76,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,3,1,0,0,
0,85,83,1,0,0,0,86,93,3,10,5,0,87,93,3,12,6,0,88,93,3,20,10,0,89,93,3,26,
13,0,90,93,3,28,14,0,91,93,3,14,7,0,92,86,1,0,0,0,92,87,1,0,0,0,92,88,1,
0,0,0,92,89,1,0,0,0,92,90,1,0,0,0,92,91,1,0,0,0,93,5,1,0,0,0,94,99,3,18,
9,0,95,96,5,13,0,0,96,98,3,18,9,0,97,95,1,0,0,0,98,101,1,0,0,0,99,97,1,0,
0,0,99,100,1,0,0,0,100,7,1,0,0,0,101,99,1,0,0,0,102,107,3,32,16,0,103,104,
5,13,0,0,104,106,3,32,16,0,105,103,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,
0,107,108,1,0,0,0,108,9,1,0,0,0,109,107,1,0,0,0,110,111,5,49,0,0,111,112,
3,6,3,0,112,11,1,0,0,0,113,114,5,1,0,0,114,115,3,8,4,0,115,13,1,0,0,0,116,
121,3,16,8,0,117,118,5,31,0,0,118,120,3,16,8,0,119,117,1,0,0,0,120,123,1,
0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,15,1,0,0,0,123,121,1,0,0,0,124,
125,3,18,9,0,125,126,5,12,0,0,126,127,3,32,16,0,127,17,1,0,0,0,128,131,3,
66,33,0,129,131,3,62,31,0,130,128,1,0,0,0,130,129,1,0,0,0,131,19,1,0,0,0,
132,135,3,22,11,0,133,135,3,24,12,0,134,132,1,0,0,0,134,133,1,0,0,0,135,
21,1,0,0,0,136,137,5,40,0,0,137,138,3,32,16,0,138,139,5,41,0,0,139,140,5,
58,0,0,140,144,3,2,1,0,141,142,5,2,0,0,142,143,5,58,0,0,143,145,3,2,1,0,
144,141,1,0,0,0,144,145,1,0,0,0,145,146,1,0,0,0,146,147,5,42,0,0,147,23,
1,0,0,0,148,149,5,40,0,0,149,150,3,32,16,0,150,151,5,41,0,0,151,154,3,4,
2,0,152,153,5,2,0,0,153,155,3,4,2,0,154,152,1,0,0,0,154,155,1,0,0,0,155,
25,1,0,0,0,156,157,5,43,0,0,157,158,3,32,16,0,158,159,5,58,0,0,159,160,3,
2,1,0,160,161,5,44,0,0,161,27,1,0,0,0,162,163,5,45,0,0,163,164,3,16,8,0,
164,165,5,46,0,0,165,168,3,32,16,0,166,167,5,47,0,0,167,169,3,32,16,0,168,
166,1,0,0,0,168,169,1,0,0,0,169,170,1,0,0,0,170,171,5,58,0,0,171,172,3,2,
1,0,172,173,5,48,0,0,173,29,1,0,0,0,174,176,3,32,16,0,175,174,1,0,0,0,176,
179,1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,31,1,0,0,0,179,177,1,0,0,
0,180,181,3,34,17,0,181,33,1,0,0,0,182,183,6,17,-1,0,183,184,3,36,18,0,184,
190,1,0,0,0,185,186,10,1,0,0,186,187,5,3,0,0,187,189,3,34,17,2,188,185,1,
0,0,0,189,192,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,35,1,0,0,0,192,
190,1,0,0,0,193,194,6,18,-1,0,194,195,3,38,19,0,195,201,1,0,0,0,196,197,
10,1,0,0,197,198,5,4,0,0,198,200,3,38,19,0,199,196,1,0,0,0,200,203,1,0,0,
0,201,199,1,0,0,0,201,202,1,0,0,0,202,37,1,0,0,0,203,201,1,0,0,0,204,205,
6,19,-1,0,205,206,3,40,20,0,206,212,1,0,0,0,207,208,10,1,0,0,208,209,5,29,
0,0,209,211,3,40,20,0,210,207,1,0,0,0,211,214,1,0,0,0,212,210,1,0,0,0,212,
213,1,0,0,0,213,39,1,0,0,0,214,212,1,0,0,0,215,216,6,20,-1,0,216,217,3,42,
21,0,217,223,1,0,0,0,218,219,10,1,0,0,219,220,5,27,0,0,220,222,3,42,21,0,
221,218,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,41,1,
0,0,0,225,223,1,0,0,0,226,227,6,21,-1,0,227,228,3,44,22,0,228,234,1,0,0,
0,229,230,10,1,0,0,230,231,7,0,0,0,231,233,3,44,22,0,232,229,1,0,0,0,233,
236,1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,43,1,0,0,0,236,234,1,0,0,
0,237,238,6,22,-1,0,238,239,3,46,23,0,239,245,1,0,0,0,240,241,10,1,0,0,241,
242,7,1,0,0,242,244,3,46,23,0,243,240,1,0,0,0,244,247,1,0,0,0,245,243,1,
0,0,0,245,246,1,0,0,0,246,45,1,0,0,0,247,245,1,0,0,0,248,249,6,23,-1,0,249,
250,3,48,24,0,250,256,1,0,0,0,251,252,10,1,0,0,252,253,7,2,0,0,253,255,3,
48,24,0,254,251,1,0,0,0,255,258,1,0,0,0,256,254,1,0,0,0,256,257,1,0,0,0,
257,47,1,0,0,0,258,256,1,0,0,0,259,260,6,24,-1,0,260,261,3,50,25,0,261,267,
1,0,0,0,262,263,10,1,0,0,263,264,7,3,0,0,264,266,3,50,25,0,265,262,1,0,0,
0,266,269,1,0,0,0,267,265,1,0,0,0,267,268,1,0,0,0,268,49,1,0,0,0,269,267,
1,0,0,0,270,271,6,25,-1,0,271,272,3,52,26,0,272,278,1,0,0,0,273,274,10,1,
0,0,274,275,7,4,0,0,275,277,3,52,26,0,276,273,1,0,0,0,277,280,1,0,0,0,278,
276,1,0,0,0,278,279,1,0,0,0,279,51,1,0,0,0,280,278,1,0,0,0,281,291,3,54,
27,0,282,283,5,19,0,0,283,289,3,52,26,0,284,285,5,20,0,0,285,289,3,52,26,
0,286,287,5,14,0,0,287,289,3,52,26,0,288,282,1,0,0,0,288,284,1,0,0,0,288,
286,1,0,0,0,289,291,1,0,0,0,290,281,1,0,0,0,290,288,1,0,0,0,291,53,1,0,0,
0,292,298,3,18,9,0,293,298,3,68,34,0,294,298,3,58,29,0,295,298,3,64,32,0,
296,298,3,56,28,0,297,292,1,0,0,0,297,293,1,0,0,0,297,294,1,0,0,0,297,295,
1,0,0,0,297,296,1,0,0,0,298,55,1,0,0,0,299,300,5,32,0,0,300,301,3,32,16,
0,301,302,5,33,0,0,302,57,1,0,0,0,303,304,3,60,30,0,304,305,5,32,0,0,305,
306,3,32,16,0,306,307,5,33,0,0,307,59,1,0,0,0,308,309,7,5,0,0,309,61,1,0,
0,0,310,311,3,66,33,0,311,312,5,32,0,0,312,313,3,8,4,0,313,314,5,33,0,0,
314,63,1,0,0,0,315,316,3,66,33,0,316,317,5,34,0,0,317,320,3,32,16,0,318,
319,5,31,0,0,319,321,3,32,16,0,320,318,1,0,0,0,320,321,1,0,0,0,321,322,1,
0,0,0,322,323,5,35,0,0,323,65,1,0,0,0,324,325,5,51,0,0,325,67,1,0,0,0,326,
331,3,70,35,0,327,331,5,52,0,0,328,331,5,54,0,0,329,331,5,55,0,0,330,326,
1,0,0,0,330,327,1,0,0,0,330,328,1,0,0,0,330,329,1,0,0,0,331,69,1,0,0,0,332,
334,5,20,0,0,333,332,1,0,0,0,333,334,1,0,0,0,334,335,1,0,0,0,335,336,5,53,
0,0,336,71,1,0,0,0,337,338,5,58,0,0,338,73,1,0,0,0,27,79,83,92,99,107,121,
130,134,144,154,168,177,190,201,212,223,234,245,256,267,278,288,290,297,
320,330,333];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class WDTPDParser extends antlr4.Parser {

    static grammarFileName = "WDTPD.g4";
    static literalNames = [ null, "'OUTPUT'", "'ELSE'", "'||'", "'&&'", 
                            "'=='", "'!='", "'>='", "'<='", "'^'", "'\\u2191'", 
                            "'**'", "'='", "','", "'!'", null, "'*'", "'/'", 
                            "'%'", "'+'", "'-'", "'<'", "'>'", null, null, 
                            null, null, "'&'", null, "'|'", null, "':'", 
                            "'('", "')'", "'['", "']'", "'abs'", "'len'", 
                            "'sqrt'", "'int'", "'IF'", "'THEN'", "'END IF'", 
                            "'WHILE'", "'END WHILE'", "'FOR'", "'TO'", "'STEP'", 
                            "'NEXT'", "'INPUT'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "EQUALS", "COMMA", 
                             "NOT", "EXPONENT", "STAR", "SLASH", "PERCENT", 
                             "PLUS", "DASH", "LT", "GT", "LTE", "GTE", "EQEQ", 
                             "DNE", "AMPERSAND", "DOUBLE_AMPERSAND", "PIPE", 
                             "DOUBLE_PIPE", "COLON", "OPEN_PAREN", "CLOSE_PAREN", 
                             "OPEN_BRACKET", "CLOSE_BRACKET", "ABS", "LEN", 
                             "SQRT", "INT_FUNC", "IF", "THEN", "END_IF", 
                             "WHILE", "END_WHILE", "FOR", "TO", "STEP", 
                             "NEXT", "INPUT", "OUTPUT", "ID", "STRING", 
                             "INTEGER", "BOOLEAN", "NULL", "COMMENT", "WSSKIP", 
                             "NL" ];
    static ruleNames = [ "prog", "stmt_list", "stmt", "reference_list", 
                         "argument_list", "input", "output", "assignment_list", 
                         "assignment", "reference", "if_stmt", "multi_line_if_stmt", 
                         "single_line_if_stmt", "while_stmt", "for_loop_stmt", 
                         "params", "expression", "conditional_or_expr", 
                         "conditional_and_expr", "or_expr", "and_expr", 
                         "equality_expr", "relational_expr", "additive_expr", 
                         "multiplicative_expr", "exponent_expr", "unary_expr", 
                         "primary_expr", "paren_expr", "function_call", 
                         "function_name", "array_reference", "str_slice", 
                         "id", "literal", "number", "endOfStatement" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = WDTPDParser.ruleNames;
        this.literalNames = WDTPDParser.literalNames;
        this.symbolicNames = WDTPDParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 17:
    	    		return this.conditional_or_expr_sempred(localctx, predIndex);
    	case 18:
    	    		return this.conditional_and_expr_sempred(localctx, predIndex);
    	case 19:
    	    		return this.or_expr_sempred(localctx, predIndex);
    	case 20:
    	    		return this.and_expr_sempred(localctx, predIndex);
    	case 21:
    	    		return this.equality_expr_sempred(localctx, predIndex);
    	case 22:
    	    		return this.relational_expr_sempred(localctx, predIndex);
    	case 23:
    	    		return this.additive_expr_sempred(localctx, predIndex);
    	case 24:
    	    		return this.multiplicative_expr_sempred(localctx, predIndex);
    	case 25:
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
	        this.state = 74;
	        this.stmt_list();
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 2601) !== 0)) {
	            this.state = 76;
	            this.stmt();
	            this.state = 79;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 58:
	                this.state = 77;
	                this.endOfStatement();
	                break;
	            case -1:
	                this.state = 78;
	                this.match(WDTPDParser.EOF);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
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



	stmt() {
	    let localctx = new StmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, WDTPDParser.RULE_stmt);
	    try {
	        this.state = 92;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 49:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.input();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.output();
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 88;
	            this.if_stmt();
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 89;
	            this.while_stmt();
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 90;
	            this.for_loop_stmt();
	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 91;
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



	reference_list() {
	    let localctx = new Reference_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, WDTPDParser.RULE_reference_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.reference();
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 95;
	            this.match(WDTPDParser.COMMA);
	            this.state = 96;
	            this.reference();
	            this.state = 101;
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



	argument_list() {
	    let localctx = new Argument_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, WDTPDParser.RULE_argument_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.expression();
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 103;
	            this.match(WDTPDParser.COMMA);
	            this.state = 104;
	            this.expression();
	            this.state = 109;
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
	    this.enterRule(localctx, 10, WDTPDParser.RULE_input);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(WDTPDParser.INPUT);
	        this.state = 111;
	        this.reference_list();
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
	    this.enterRule(localctx, 12, WDTPDParser.RULE_output);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(WDTPDParser.T__0);
	        this.state = 114;
	        this.argument_list();
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
	    this.enterRule(localctx, 14, WDTPDParser.RULE_assignment_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.assignment();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 117;
	            this.match(WDTPDParser.COLON);
	            this.state = 118;
	            this.assignment();
	            this.state = 123;
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
	    this.enterRule(localctx, 16, WDTPDParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.reference();
	        this.state = 125;
	        this.match(WDTPDParser.EQUALS);
	        this.state = 126;
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



	reference() {
	    let localctx = new ReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, WDTPDParser.RULE_reference);
	    try {
	        this.state = 130;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 128;
	            this.id();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 129;
	            this.array_reference();
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



	if_stmt() {
	    let localctx = new If_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, WDTPDParser.RULE_if_stmt);
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 132;
	            this.multi_line_if_stmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this.single_line_if_stmt();
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



	multi_line_if_stmt() {
	    let localctx = new Multi_line_if_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, WDTPDParser.RULE_multi_line_if_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(WDTPDParser.IF);
	        this.state = 137;
	        this.expression();
	        this.state = 138;
	        this.match(WDTPDParser.THEN);
	        this.state = 139;
	        this.match(WDTPDParser.NL);
	        this.state = 140;
	        this.stmt_list();
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 141;
	            this.match(WDTPDParser.T__1);
	            this.state = 142;
	            this.match(WDTPDParser.NL);
	            this.state = 143;
	            this.stmt_list();
	        }

	        this.state = 146;
	        this.match(WDTPDParser.END_IF);
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



	single_line_if_stmt() {
	    let localctx = new Single_line_if_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, WDTPDParser.RULE_single_line_if_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(WDTPDParser.IF);
	        this.state = 149;
	        this.expression();
	        this.state = 150;
	        this.match(WDTPDParser.THEN);
	        this.state = 151;
	        this.stmt();
	        this.state = 154;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 152;
	            this.match(WDTPDParser.T__1);
	            this.state = 153;
	            this.stmt();

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
	    this.enterRule(localctx, 26, WDTPDParser.RULE_while_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(WDTPDParser.WHILE);
	        this.state = 157;
	        this.expression();
	        this.state = 158;
	        this.match(WDTPDParser.NL);
	        this.state = 159;
	        this.stmt_list();
	        this.state = 160;
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
	    this.enterRule(localctx, 28, WDTPDParser.RULE_for_loop_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(WDTPDParser.FOR);
	        this.state = 163;
	        this.assignment();
	        this.state = 164;
	        this.match(WDTPDParser.TO);
	        this.state = 165;
	        this.expression();
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===47) {
	            this.state = 166;
	            this.match(WDTPDParser.STEP);
	            this.state = 167;
	            this.expression();
	        }

	        this.state = 170;
	        this.match(WDTPDParser.NL);
	        this.state = 171;
	        this.stmt_list();
	        this.state = 172;
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
	    this.enterRule(localctx, 30, WDTPDParser.RULE_params);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1589248) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 16253169) !== 0)) {
	            this.state = 174;
	            this.expression();
	            this.state = 179;
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
	    this.enterRule(localctx, 32, WDTPDParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
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
	    const _startState = 34;
	    this.enterRecursionRule(localctx, 34, WDTPDParser.RULE_conditional_or_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.conditional_and_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 190;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Conditional_or_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_conditional_or_expr);
	                this.state = 185;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 186;
	                this.match(WDTPDParser.T__2);
	                this.state = 187;
	                this.conditional_or_expr(2); 
	            }
	            this.state = 192;
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


	conditional_and_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Conditional_and_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 36;
	    this.enterRecursionRule(localctx, 36, WDTPDParser.RULE_conditional_and_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.or_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 201;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Conditional_and_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_conditional_and_expr);
	                this.state = 196;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 197;
	                this.match(WDTPDParser.T__3);
	                this.state = 198;
	                this.or_expr(0); 
	            }
	            this.state = 203;
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


	or_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Or_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, WDTPDParser.RULE_or_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.and_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 212;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Or_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_or_expr);
	                this.state = 207;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 208;
	                this.match(WDTPDParser.PIPE);
	                this.state = 209;
	                this.and_expr(0); 
	            }
	            this.state = 214;
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


	and_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new And_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 40;
	    this.enterRecursionRule(localctx, 40, WDTPDParser.RULE_and_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.equality_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 223;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new And_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_and_expr);
	                this.state = 218;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 219;
	                this.match(WDTPDParser.AMPERSAND);
	                this.state = 220;
	                this.equality_expr(0); 
	            }
	            this.state = 225;
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


	equality_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Equality_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 42;
	    this.enterRecursionRule(localctx, 42, WDTPDParser.RULE_equality_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.relational_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 234;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Equality_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_equality_expr);
	                this.state = 229;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 230;
	                _la = this._input.LA(1);
	                if(!(_la===5 || _la===6)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 231;
	                this.relational_expr(0); 
	            }
	            this.state = 236;
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


	relational_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Relational_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 44;
	    this.enterRecursionRule(localctx, 44, WDTPDParser.RULE_relational_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.additive_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 245;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Relational_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_relational_expr);
	                this.state = 240;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 241;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 6291840) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 242;
	                this.additive_expr(0); 
	            }
	            this.state = 247;
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


	additive_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Additive_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 46;
	    this.enterRecursionRule(localctx, 46, WDTPDParser.RULE_additive_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.multiplicative_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 256;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Additive_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_additive_expr);
	                this.state = 251;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 252;
	                _la = this._input.LA(1);
	                if(!(_la===19 || _la===20)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 253;
	                this.multiplicative_expr(0); 
	            }
	            this.state = 258;
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


	multiplicative_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Multiplicative_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 48;
	    this.enterRecursionRule(localctx, 48, WDTPDParser.RULE_multiplicative_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.exponent_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 267;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Multiplicative_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_multiplicative_expr);
	                this.state = 262;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 263;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 458752) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 264;
	                this.exponent_expr(0); 
	            }
	            this.state = 269;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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
	    const _startState = 50;
	    this.enterRecursionRule(localctx, 50, WDTPDParser.RULE_exponent_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this.unary_expr();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 278;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Exponent_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_exponent_expr);
	                this.state = 273;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 274;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 275;
	                this.unary_expr(); 
	            }
	            this.state = 280;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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
	    this.enterRule(localctx, 52, WDTPDParser.RULE_unary_expr);
	    try {
	        this.state = 290;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 281;
	            this.primary_expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 288;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 19:
	                this.state = 282;
	                this.match(WDTPDParser.PLUS);
	                this.state = 283;
	                this.unary_expr();
	                break;
	            case 20:
	                this.state = 284;
	                this.match(WDTPDParser.DASH);
	                this.state = 285;
	                this.unary_expr();
	                break;
	            case 14:
	                this.state = 286;
	                this.match(WDTPDParser.NOT);
	                this.state = 287;
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
	    this.enterRule(localctx, 54, WDTPDParser.RULE_primary_expr);
	    try {
	        this.state = 297;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 292;
	            this.reference();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 293;
	            this.literal();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 294;
	            this.function_call();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 295;
	            this.str_slice();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 296;
	            this.paren_expr();
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



	paren_expr() {
	    let localctx = new Paren_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, WDTPDParser.RULE_paren_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299;
	        this.match(WDTPDParser.OPEN_PAREN);
	        this.state = 300;
	        this.expression();
	        this.state = 301;
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



	function_call() {
	    let localctx = new Function_callContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, WDTPDParser.RULE_function_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this.function_name();
	        this.state = 304;
	        this.match(WDTPDParser.OPEN_PAREN);
	        this.state = 305;
	        this.expression();
	        this.state = 306;
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
	    this.enterRule(localctx, 60, WDTPDParser.RULE_function_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        _la = this._input.LA(1);
	        if(!(((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 15) !== 0))) {
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
	    this.enterRule(localctx, 62, WDTPDParser.RULE_array_reference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.id();
	        this.state = 311;
	        this.match(WDTPDParser.OPEN_PAREN);
	        this.state = 312;
	        this.argument_list();
	        this.state = 313;
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
	    this.enterRule(localctx, 64, WDTPDParser.RULE_str_slice);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
	        this.id();
	        this.state = 316;
	        this.match(WDTPDParser.OPEN_BRACKET);
	        this.state = 317;
	        this.expression();
	        this.state = 320;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 318;
	            this.match(WDTPDParser.COLON);
	            this.state = 319;
	            this.expression();
	        }

	        this.state = 322;
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
	    this.enterRule(localctx, 66, WDTPDParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
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
	    this.enterRule(localctx, 68, WDTPDParser.RULE_literal);
	    try {
	        this.state = 330;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	        case 53:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 326;
	            this.number();
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 327;
	            this.match(WDTPDParser.STRING);
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 328;
	            this.match(WDTPDParser.BOOLEAN);
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 329;
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
	    this.enterRule(localctx, 70, WDTPDParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 332;
	            this.match(WDTPDParser.DASH);
	        }

	        this.state = 335;
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



	endOfStatement() {
	    let localctx = new EndOfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, WDTPDParser.RULE_endOfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 337;
	        this.match(WDTPDParser.NL);
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
WDTPDParser.T__7 = 8;
WDTPDParser.T__8 = 9;
WDTPDParser.T__9 = 10;
WDTPDParser.T__10 = 11;
WDTPDParser.EQUALS = 12;
WDTPDParser.COMMA = 13;
WDTPDParser.NOT = 14;
WDTPDParser.EXPONENT = 15;
WDTPDParser.STAR = 16;
WDTPDParser.SLASH = 17;
WDTPDParser.PERCENT = 18;
WDTPDParser.PLUS = 19;
WDTPDParser.DASH = 20;
WDTPDParser.LT = 21;
WDTPDParser.GT = 22;
WDTPDParser.LTE = 23;
WDTPDParser.GTE = 24;
WDTPDParser.EQEQ = 25;
WDTPDParser.DNE = 26;
WDTPDParser.AMPERSAND = 27;
WDTPDParser.DOUBLE_AMPERSAND = 28;
WDTPDParser.PIPE = 29;
WDTPDParser.DOUBLE_PIPE = 30;
WDTPDParser.COLON = 31;
WDTPDParser.OPEN_PAREN = 32;
WDTPDParser.CLOSE_PAREN = 33;
WDTPDParser.OPEN_BRACKET = 34;
WDTPDParser.CLOSE_BRACKET = 35;
WDTPDParser.ABS = 36;
WDTPDParser.LEN = 37;
WDTPDParser.SQRT = 38;
WDTPDParser.INT_FUNC = 39;
WDTPDParser.IF = 40;
WDTPDParser.THEN = 41;
WDTPDParser.END_IF = 42;
WDTPDParser.WHILE = 43;
WDTPDParser.END_WHILE = 44;
WDTPDParser.FOR = 45;
WDTPDParser.TO = 46;
WDTPDParser.STEP = 47;
WDTPDParser.NEXT = 48;
WDTPDParser.INPUT = 49;
WDTPDParser.OUTPUT = 50;
WDTPDParser.ID = 51;
WDTPDParser.STRING = 52;
WDTPDParser.INTEGER = 53;
WDTPDParser.BOOLEAN = 54;
WDTPDParser.NULL = 55;
WDTPDParser.COMMENT = 56;
WDTPDParser.WSSKIP = 57;
WDTPDParser.NL = 58;

WDTPDParser.RULE_prog = 0;
WDTPDParser.RULE_stmt_list = 1;
WDTPDParser.RULE_stmt = 2;
WDTPDParser.RULE_reference_list = 3;
WDTPDParser.RULE_argument_list = 4;
WDTPDParser.RULE_input = 5;
WDTPDParser.RULE_output = 6;
WDTPDParser.RULE_assignment_list = 7;
WDTPDParser.RULE_assignment = 8;
WDTPDParser.RULE_reference = 9;
WDTPDParser.RULE_if_stmt = 10;
WDTPDParser.RULE_multi_line_if_stmt = 11;
WDTPDParser.RULE_single_line_if_stmt = 12;
WDTPDParser.RULE_while_stmt = 13;
WDTPDParser.RULE_for_loop_stmt = 14;
WDTPDParser.RULE_params = 15;
WDTPDParser.RULE_expression = 16;
WDTPDParser.RULE_conditional_or_expr = 17;
WDTPDParser.RULE_conditional_and_expr = 18;
WDTPDParser.RULE_or_expr = 19;
WDTPDParser.RULE_and_expr = 20;
WDTPDParser.RULE_equality_expr = 21;
WDTPDParser.RULE_relational_expr = 22;
WDTPDParser.RULE_additive_expr = 23;
WDTPDParser.RULE_multiplicative_expr = 24;
WDTPDParser.RULE_exponent_expr = 25;
WDTPDParser.RULE_unary_expr = 26;
WDTPDParser.RULE_primary_expr = 27;
WDTPDParser.RULE_paren_expr = 28;
WDTPDParser.RULE_function_call = 29;
WDTPDParser.RULE_function_name = 30;
WDTPDParser.RULE_array_reference = 31;
WDTPDParser.RULE_str_slice = 32;
WDTPDParser.RULE_id = 33;
WDTPDParser.RULE_literal = 34;
WDTPDParser.RULE_number = 35;
WDTPDParser.RULE_endOfStatement = 36;

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

	endOfStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EndOfStatementContext);
	    } else {
	        return this.getTypedRuleContext(EndOfStatementContext,i);
	    }
	};

	EOF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WDTPDParser.EOF);
	    } else {
	        return this.getToken(WDTPDParser.EOF, i);
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



class Reference_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_reference_list;
    }

	reference = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReferenceContext);
	    } else {
	        return this.getTypedRuleContext(ReferenceContext,i);
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
	        listener.enterReference_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitReference_list(this);
		}
	}


}



class Argument_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_argument_list;
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
	        listener.enterArgument_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitArgument_list(this);
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

	reference_list() {
	    return this.getTypedRuleContext(Reference_listContext,0);
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

	argument_list() {
	    return this.getTypedRuleContext(Argument_listContext,0);
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

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	EQUALS() {
	    return this.getToken(WDTPDParser.EQUALS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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



class ReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_reference;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	array_reference() {
	    return this.getTypedRuleContext(Array_referenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitReference(this);
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

	multi_line_if_stmt() {
	    return this.getTypedRuleContext(Multi_line_if_stmtContext,0);
	};

	single_line_if_stmt() {
	    return this.getTypedRuleContext(Single_line_if_stmtContext,0);
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



class Multi_line_if_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_multi_line_if_stmt;
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

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WDTPDParser.NL);
	    } else {
	        return this.getToken(WDTPDParser.NL, i);
	    }
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
	        listener.enterMulti_line_if_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitMulti_line_if_stmt(this);
		}
	}


}



class Single_line_if_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_single_line_if_stmt;
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
	        listener.enterSingle_line_if_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitSingle_line_if_stmt(this);
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

	NL() {
	    return this.getToken(WDTPDParser.NL, 0);
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

	NL() {
	    return this.getToken(WDTPDParser.NL, 0);
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

	PIPE() {
	    return this.getToken(WDTPDParser.PIPE, 0);
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

	AMPERSAND() {
	    return this.getToken(WDTPDParser.AMPERSAND, 0);
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

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	function_call() {
	    return this.getTypedRuleContext(Function_callContext,0);
	};

	str_slice() {
	    return this.getTypedRuleContext(Str_sliceContext,0);
	};

	paren_expr() {
	    return this.getTypedRuleContext(Paren_exprContext,0);
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



class Paren_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_paren_expr;
    }

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
	        listener.enterParen_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitParen_expr(this);
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

	argument_list() {
	    return this.getTypedRuleContext(Argument_listContext,0);
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



class EndOfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WDTPDParser.RULE_endOfStatement;
    }

	NL() {
	    return this.getToken(WDTPDParser.NL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.enterEndOfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WDTPDListener ) {
	        listener.exitEndOfStatement(this);
		}
	}


}




WDTPDParser.ProgContext = ProgContext; 
WDTPDParser.Stmt_listContext = Stmt_listContext; 
WDTPDParser.StmtContext = StmtContext; 
WDTPDParser.Reference_listContext = Reference_listContext; 
WDTPDParser.Argument_listContext = Argument_listContext; 
WDTPDParser.InputContext = InputContext; 
WDTPDParser.OutputContext = OutputContext; 
WDTPDParser.Assignment_listContext = Assignment_listContext; 
WDTPDParser.AssignmentContext = AssignmentContext; 
WDTPDParser.ReferenceContext = ReferenceContext; 
WDTPDParser.If_stmtContext = If_stmtContext; 
WDTPDParser.Multi_line_if_stmtContext = Multi_line_if_stmtContext; 
WDTPDParser.Single_line_if_stmtContext = Single_line_if_stmtContext; 
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
WDTPDParser.Paren_exprContext = Paren_exprContext; 
WDTPDParser.Function_callContext = Function_callContext; 
WDTPDParser.Function_nameContext = Function_nameContext; 
WDTPDParser.Array_referenceContext = Array_referenceContext; 
WDTPDParser.Str_sliceContext = Str_sliceContext; 
WDTPDParser.IdContext = IdContext; 
WDTPDParser.LiteralContext = LiteralContext; 
WDTPDParser.NumberContext = NumberContext; 
WDTPDParser.EndOfStatementContext = EndOfStatementContext; 
