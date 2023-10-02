// Generated from WDTPD.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'https://cdn.jsdelivr.net/npm/antlr4@4.13.1/+esm'
import WDTPDListener from './WDTPDListener.js';
const serializedATN = [4,1,52,331,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,1,0,1,0,1,1,1,1,1,1,3,1,76,8,1,5,1,78,8,1,10,1,12,1,81,9,1,1,2,1,2,1,
2,1,2,1,2,1,2,3,2,89,8,2,1,3,1,3,1,3,5,3,94,8,3,10,3,12,3,97,9,3,1,4,1,4,
1,4,1,5,1,5,4,5,104,8,5,11,5,12,5,105,1,6,1,6,1,6,5,6,111,8,6,10,6,12,6,
114,9,6,1,7,1,7,3,7,118,8,7,1,7,1,7,1,7,1,8,1,8,3,8,125,8,8,1,9,1,9,1,9,
1,9,1,9,1,9,1,9,1,9,3,9,135,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,3,
10,145,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,
3,12,159,8,12,1,12,1,12,1,12,1,12,1,13,5,13,166,8,13,10,13,12,13,169,9,13,
1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,5,15,179,8,15,10,15,12,15,182,9,
15,1,16,1,16,1,16,1,16,1,16,1,16,5,16,190,8,16,10,16,12,16,193,9,16,1,17,
1,17,1,17,1,17,1,17,1,17,5,17,201,8,17,10,17,12,17,204,9,17,1,18,1,18,1,
18,1,18,1,18,1,18,5,18,212,8,18,10,18,12,18,215,9,18,1,19,1,19,1,19,1,19,
1,19,1,19,5,19,223,8,19,10,19,12,19,226,9,19,1,20,1,20,1,20,1,20,1,20,1,
20,5,20,234,8,20,10,20,12,20,237,9,20,1,21,1,21,1,21,1,21,1,21,1,21,5,21,
245,8,21,10,21,12,21,248,9,21,1,22,1,22,1,22,1,22,1,22,1,22,5,22,256,8,22,
10,22,12,22,259,9,22,1,23,1,23,1,23,1,23,1,23,1,23,5,23,267,8,23,10,23,12,
23,270,9,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,279,8,24,3,24,281,8,
24,1,25,1,25,1,25,1,25,1,25,1,25,3,25,289,8,25,1,26,1,26,1,26,1,26,1,27,
1,27,1,27,1,27,1,27,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,
30,1,30,3,30,312,8,30,1,30,1,30,1,31,1,31,1,32,1,32,1,32,1,32,3,32,322,8,
32,1,33,3,33,325,8,33,1,33,1,33,1,34,1,34,1,34,0,9,30,32,34,36,38,40,42,
44,46,35,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
46,48,50,52,54,56,58,60,62,64,66,68,0,6,1,0,21,22,1,0,17,20,1,0,15,16,1,
0,12,14,1,0,6,8,1,0,30,33,333,0,70,1,0,0,0,2,79,1,0,0,0,4,88,1,0,0,0,6,90,
1,0,0,0,8,98,1,0,0,0,10,101,1,0,0,0,12,107,1,0,0,0,14,117,1,0,0,0,16,124,
1,0,0,0,18,126,1,0,0,0,20,138,1,0,0,0,22,146,1,0,0,0,24,152,1,0,0,0,26,167,
1,0,0,0,28,170,1,0,0,0,30,172,1,0,0,0,32,183,1,0,0,0,34,194,1,0,0,0,36,205,
1,0,0,0,38,216,1,0,0,0,40,227,1,0,0,0,42,238,1,0,0,0,44,249,1,0,0,0,46,260,
1,0,0,0,48,280,1,0,0,0,50,288,1,0,0,0,52,290,1,0,0,0,54,294,1,0,0,0,56,299,
1,0,0,0,58,301,1,0,0,0,60,306,1,0,0,0,62,315,1,0,0,0,64,321,1,0,0,0,66,324,
1,0,0,0,68,328,1,0,0,0,70,71,3,2,1,0,71,1,1,0,0,0,72,75,3,4,2,0,73,76,3,
68,34,0,74,76,5,0,0,1,75,73,1,0,0,0,75,74,1,0,0,0,76,78,1,0,0,0,77,72,1,
0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,3,1,0,0,0,81,79,1,0,0,
0,82,89,3,8,4,0,83,89,3,10,5,0,84,89,3,16,8,0,85,89,3,22,11,0,86,89,3,24,
12,0,87,89,3,12,6,0,88,82,1,0,0,0,88,83,1,0,0,0,88,84,1,0,0,0,88,85,1,0,
0,0,88,86,1,0,0,0,88,87,1,0,0,0,89,5,1,0,0,0,90,95,3,62,31,0,91,92,5,9,0,
0,92,94,3,62,31,0,93,91,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,
0,96,7,1,0,0,0,97,95,1,0,0,0,98,99,5,43,0,0,99,100,3,6,3,0,100,9,1,0,0,0,
101,103,5,1,0,0,102,104,3,28,14,0,103,102,1,0,0,0,104,105,1,0,0,0,105,103,
1,0,0,0,105,106,1,0,0,0,106,11,1,0,0,0,107,112,3,14,7,0,108,109,5,25,0,0,
109,111,3,14,7,0,110,108,1,0,0,0,111,114,1,0,0,0,112,110,1,0,0,0,112,113,
1,0,0,0,113,13,1,0,0,0,114,112,1,0,0,0,115,118,3,62,31,0,116,118,3,58,29,
0,117,115,1,0,0,0,117,116,1,0,0,0,118,119,1,0,0,0,119,120,5,2,0,0,120,121,
3,28,14,0,121,15,1,0,0,0,122,125,3,18,9,0,123,125,3,20,10,0,124,122,1,0,
0,0,124,123,1,0,0,0,125,17,1,0,0,0,126,127,5,34,0,0,127,128,3,28,14,0,128,
129,5,35,0,0,129,130,5,52,0,0,130,134,3,2,1,0,131,132,5,3,0,0,132,133,5,
52,0,0,133,135,3,2,1,0,134,131,1,0,0,0,134,135,1,0,0,0,135,136,1,0,0,0,136,
137,5,36,0,0,137,19,1,0,0,0,138,139,5,34,0,0,139,140,3,28,14,0,140,141,5,
35,0,0,141,144,3,4,2,0,142,143,5,3,0,0,143,145,3,4,2,0,144,142,1,0,0,0,144,
145,1,0,0,0,145,21,1,0,0,0,146,147,5,37,0,0,147,148,3,28,14,0,148,149,5,
52,0,0,149,150,3,2,1,0,150,151,5,38,0,0,151,23,1,0,0,0,152,153,5,39,0,0,
153,154,3,14,7,0,154,155,5,40,0,0,155,158,3,28,14,0,156,157,5,41,0,0,157,
159,3,28,14,0,158,156,1,0,0,0,158,159,1,0,0,0,159,160,1,0,0,0,160,161,5,
52,0,0,161,162,3,2,1,0,162,163,5,42,0,0,163,25,1,0,0,0,164,166,3,28,14,0,
165,164,1,0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,167,168,1,0,0,0,168,27,1,
0,0,0,169,167,1,0,0,0,170,171,3,30,15,0,171,29,1,0,0,0,172,173,6,15,-1,0,
173,174,3,32,16,0,174,180,1,0,0,0,175,176,10,1,0,0,176,177,5,24,0,0,177,
179,3,30,15,2,178,175,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,180,181,1,
0,0,0,181,31,1,0,0,0,182,180,1,0,0,0,183,184,6,16,-1,0,184,185,3,34,17,0,
185,191,1,0,0,0,186,187,10,1,0,0,187,188,5,23,0,0,188,190,3,34,17,0,189,
186,1,0,0,0,190,193,1,0,0,0,191,189,1,0,0,0,191,192,1,0,0,0,192,33,1,0,0,
0,193,191,1,0,0,0,194,195,6,17,-1,0,195,196,3,36,18,0,196,202,1,0,0,0,197,
198,10,1,0,0,198,199,5,4,0,0,199,201,3,36,18,0,200,197,1,0,0,0,201,204,1,
0,0,0,202,200,1,0,0,0,202,203,1,0,0,0,203,35,1,0,0,0,204,202,1,0,0,0,205,
206,6,18,-1,0,206,207,3,38,19,0,207,213,1,0,0,0,208,209,10,1,0,0,209,210,
5,5,0,0,210,212,3,38,19,0,211,208,1,0,0,0,212,215,1,0,0,0,213,211,1,0,0,
0,213,214,1,0,0,0,214,37,1,0,0,0,215,213,1,0,0,0,216,217,6,19,-1,0,217,218,
3,40,20,0,218,224,1,0,0,0,219,220,10,1,0,0,220,221,7,0,0,0,221,223,3,40,
20,0,222,219,1,0,0,0,223,226,1,0,0,0,224,222,1,0,0,0,224,225,1,0,0,0,225,
39,1,0,0,0,226,224,1,0,0,0,227,228,6,20,-1,0,228,229,3,42,21,0,229,235,1,
0,0,0,230,231,10,1,0,0,231,232,7,1,0,0,232,234,3,42,21,0,233,230,1,0,0,0,
234,237,1,0,0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,41,1,0,0,0,237,235,1,
0,0,0,238,239,6,21,-1,0,239,240,3,44,22,0,240,246,1,0,0,0,241,242,10,1,0,
0,242,243,7,2,0,0,243,245,3,44,22,0,244,241,1,0,0,0,245,248,1,0,0,0,246,
244,1,0,0,0,246,247,1,0,0,0,247,43,1,0,0,0,248,246,1,0,0,0,249,250,6,22,
-1,0,250,251,3,46,23,0,251,257,1,0,0,0,252,253,10,1,0,0,253,254,7,3,0,0,
254,256,3,46,23,0,255,252,1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,0,257,258,
1,0,0,0,258,45,1,0,0,0,259,257,1,0,0,0,260,261,6,23,-1,0,261,262,3,48,24,
0,262,268,1,0,0,0,263,264,10,1,0,0,264,265,7,4,0,0,265,267,3,48,24,0,266,
263,1,0,0,0,267,270,1,0,0,0,268,266,1,0,0,0,268,269,1,0,0,0,269,47,1,0,0,
0,270,268,1,0,0,0,271,281,3,50,25,0,272,273,5,15,0,0,273,279,3,48,24,0,274,
275,5,16,0,0,275,279,3,48,24,0,276,277,5,10,0,0,277,279,3,48,24,0,278,272,
1,0,0,0,278,274,1,0,0,0,278,276,1,0,0,0,279,281,1,0,0,0,280,271,1,0,0,0,
280,278,1,0,0,0,281,49,1,0,0,0,282,289,3,62,31,0,283,289,3,64,32,0,284,289,
3,54,27,0,285,289,3,58,29,0,286,289,3,60,30,0,287,289,3,52,26,0,288,282,
1,0,0,0,288,283,1,0,0,0,288,284,1,0,0,0,288,285,1,0,0,0,288,286,1,0,0,0,
288,287,1,0,0,0,289,51,1,0,0,0,290,291,5,26,0,0,291,292,3,28,14,0,292,293,
5,27,0,0,293,53,1,0,0,0,294,295,3,56,28,0,295,296,5,26,0,0,296,297,3,28,
14,0,297,298,5,27,0,0,298,55,1,0,0,0,299,300,7,5,0,0,300,57,1,0,0,0,301,
302,3,62,31,0,302,303,5,26,0,0,303,304,3,42,21,0,304,305,5,27,0,0,305,59,
1,0,0,0,306,307,3,62,31,0,307,308,5,28,0,0,308,311,3,28,14,0,309,310,5,25,
0,0,310,312,3,28,14,0,311,309,1,0,0,0,311,312,1,0,0,0,312,313,1,0,0,0,313,
314,5,29,0,0,314,61,1,0,0,0,315,316,5,45,0,0,316,63,1,0,0,0,317,322,3,66,
33,0,318,322,5,46,0,0,319,322,5,48,0,0,320,322,5,49,0,0,321,317,1,0,0,0,
321,318,1,0,0,0,321,319,1,0,0,0,321,320,1,0,0,0,322,65,1,0,0,0,323,325,5,
16,0,0,324,323,1,0,0,0,324,325,1,0,0,0,325,326,1,0,0,0,326,327,5,47,0,0,
327,67,1,0,0,0,328,329,5,52,0,0,329,69,1,0,0,0,27,75,79,88,95,105,112,117,
124,134,144,158,167,180,191,202,213,224,235,246,257,268,278,280,288,311,
321,324];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class WDTPDParser extends antlr4.Parser {

    static grammarFileName = "WDTPD.g4";
    static literalNames = [ null, "'OUTPUT'", "'='", "'ELSE'", "'|'", "'&'", 
                            "'^'", "'\\u2191'", "'**'", "','", "'!'", null, 
                            "'*'", "'/'", "'%'", "'+'", "'-'", "'<'", "'>'", 
                            "'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", 
                            "':'", "'('", "')'", "'['", "']'", "'abs'", 
                            "'len'", "'sqrt'", "'int'", "'IF'", "'THEN'", 
                            "'END IF'", "'WHILE'", "'END WHILE'", "'FOR'", 
                            "'TO'", "'STEP'", "'NEXT'", "'INPUT'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "COMMA", "NOT", "EXPONENT", "STAR", "SLASH", 
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
                         "multi_line_if_stmt", "single_line_if_stmt", "while_stmt", 
                         "for_loop_stmt", "params", "expression", "conditional_or_expr", 
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
    	case 15:
    	    		return this.conditional_or_expr_sempred(localctx, predIndex);
    	case 16:
    	    		return this.conditional_and_expr_sempred(localctx, predIndex);
    	case 17:
    	    		return this.or_expr_sempred(localctx, predIndex);
    	case 18:
    	    		return this.and_expr_sempred(localctx, predIndex);
    	case 19:
    	    		return this.equality_expr_sempred(localctx, predIndex);
    	case 20:
    	    		return this.relational_expr_sempred(localctx, predIndex);
    	case 21:
    	    		return this.additive_expr_sempred(localctx, predIndex);
    	case 22:
    	    		return this.multiplicative_expr_sempred(localctx, predIndex);
    	case 23:
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
	        this.state = 70;
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
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || ((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 2601) !== 0)) {
	            this.state = 72;
	            this.stmt();
	            this.state = 75;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 52:
	                this.state = 73;
	                this.endOfStatement();
	                break;
	            case -1:
	                this.state = 74;
	                this.match(WDTPDParser.EOF);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 81;
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
	        this.state = 88;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 43:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.input();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.output();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 84;
	            this.if_stmt();
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 85;
	            this.while_stmt();
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 86;
	            this.for_loop_stmt();
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 87;
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
	        this.state = 90;
	        this.id();
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 91;
	            this.match(WDTPDParser.COMMA);
	            this.state = 92;
	            this.id();
	            this.state = 97;
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
	        this.state = 98;
	        this.match(WDTPDParser.INPUT);
	        this.state = 99;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(WDTPDParser.T__0);
	        this.state = 103; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 102;
	            this.expression();
	            this.state = 105; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3288433664) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 253955) !== 0));
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
	        this.state = 107;
	        this.assignment();
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===25) {
	            this.state = 108;
	            this.match(WDTPDParser.COLON);
	            this.state = 109;
	            this.assignment();
	            this.state = 114;
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
	        this.state = 117;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 115;
	            this.id();
	            break;

	        case 2:
	            this.state = 116;
	            this.array_reference();
	            break;

	        }
	        this.state = 119;
	        this.match(WDTPDParser.T__1);
	        this.state = 120;
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
	        this.state = 124;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 122;
	            this.multi_line_if_stmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
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
	    this.enterRule(localctx, 18, WDTPDParser.RULE_multi_line_if_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(WDTPDParser.IF);
	        this.state = 127;
	        this.expression();
	        this.state = 128;
	        this.match(WDTPDParser.THEN);
	        this.state = 129;
	        this.match(WDTPDParser.NL);
	        this.state = 130;
	        this.stmt_list();
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 131;
	            this.match(WDTPDParser.T__2);
	            this.state = 132;
	            this.match(WDTPDParser.NL);
	            this.state = 133;
	            this.stmt_list();
	        }

	        this.state = 136;
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
	    this.enterRule(localctx, 20, WDTPDParser.RULE_single_line_if_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(WDTPDParser.IF);
	        this.state = 139;
	        this.expression();
	        this.state = 140;
	        this.match(WDTPDParser.THEN);
	        this.state = 141;
	        this.stmt();
	        this.state = 144;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 142;
	            this.match(WDTPDParser.T__2);
	            this.state = 143;
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
	    this.enterRule(localctx, 22, WDTPDParser.RULE_while_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(WDTPDParser.WHILE);
	        this.state = 147;
	        this.expression();
	        this.state = 148;
	        this.match(WDTPDParser.NL);
	        this.state = 149;
	        this.stmt_list();
	        this.state = 150;
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
	    this.enterRule(localctx, 24, WDTPDParser.RULE_for_loop_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(WDTPDParser.FOR);
	        this.state = 153;
	        this.assignment();
	        this.state = 154;
	        this.match(WDTPDParser.TO);
	        this.state = 155;
	        this.expression();
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 156;
	            this.match(WDTPDParser.STEP);
	            this.state = 157;
	            this.expression();
	        }

	        this.state = 160;
	        this.match(WDTPDParser.NL);
	        this.state = 161;
	        this.stmt_list();
	        this.state = 162;
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
	    this.enterRule(localctx, 26, WDTPDParser.RULE_params);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3288433664) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 253955) !== 0)) {
	            this.state = 164;
	            this.expression();
	            this.state = 169;
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
	    this.enterRule(localctx, 28, WDTPDParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
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
	    const _startState = 30;
	    this.enterRecursionRule(localctx, 30, WDTPDParser.RULE_conditional_or_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.conditional_and_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 180;
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
	                this.state = 175;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 176;
	                this.match(WDTPDParser.DOUBLE_PIPE);
	                this.state = 177;
	                this.conditional_or_expr(2); 
	            }
	            this.state = 182;
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
	    const _startState = 32;
	    this.enterRecursionRule(localctx, 32, WDTPDParser.RULE_conditional_and_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.or_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 191;
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
	                this.state = 186;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 187;
	                this.match(WDTPDParser.DOUBLE_AMPERSAND);
	                this.state = 188;
	                this.or_expr(0); 
	            }
	            this.state = 193;
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
	    const _startState = 34;
	    this.enterRecursionRule(localctx, 34, WDTPDParser.RULE_or_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.and_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 202;
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
	                this.state = 197;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 198;
	                this.match(WDTPDParser.T__3);
	                this.state = 199;
	                this.and_expr(0); 
	            }
	            this.state = 204;
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
	    const _startState = 36;
	    this.enterRecursionRule(localctx, 36, WDTPDParser.RULE_and_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.equality_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 213;
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
	                this.state = 208;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 209;
	                this.match(WDTPDParser.T__4);
	                this.state = 210;
	                this.equality_expr(0); 
	            }
	            this.state = 215;
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
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, WDTPDParser.RULE_equality_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.relational_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 224;
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
	                this.state = 219;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 220;
	                _la = this._input.LA(1);
	                if(!(_la===21 || _la===22)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 221;
	                this.relational_expr(0); 
	            }
	            this.state = 226;
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
	    const _startState = 40;
	    this.enterRecursionRule(localctx, 40, WDTPDParser.RULE_relational_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.additive_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 235;
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
	                this.state = 230;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 231;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1966080) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 232;
	                this.additive_expr(0); 
	            }
	            this.state = 237;
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
	    const _startState = 42;
	    this.enterRecursionRule(localctx, 42, WDTPDParser.RULE_additive_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.multiplicative_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 246;
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
	                this.state = 241;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 242;
	                _la = this._input.LA(1);
	                if(!(_la===15 || _la===16)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 243;
	                this.multiplicative_expr(0); 
	            }
	            this.state = 248;
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
	    const _startState = 44;
	    this.enterRecursionRule(localctx, 44, WDTPDParser.RULE_multiplicative_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.exponent_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 257;
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
	                this.state = 252;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 253;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 254;
	                this.exponent_expr(0); 
	            }
	            this.state = 259;
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
	    const _startState = 46;
	    this.enterRecursionRule(localctx, 46, WDTPDParser.RULE_exponent_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.unary_expr();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 268;
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
	                this.state = 263;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 264;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 448) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 265;
	                this.unary_expr(); 
	            }
	            this.state = 270;
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
	    this.enterRule(localctx, 48, WDTPDParser.RULE_unary_expr);
	    try {
	        this.state = 280;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 271;
	            this.primary_expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 278;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 15:
	                this.state = 272;
	                this.match(WDTPDParser.PLUS);
	                this.state = 273;
	                this.unary_expr();
	                break;
	            case 16:
	                this.state = 274;
	                this.match(WDTPDParser.DASH);
	                this.state = 275;
	                this.unary_expr();
	                break;
	            case 10:
	                this.state = 276;
	                this.match(WDTPDParser.NOT);
	                this.state = 277;
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
	    this.enterRule(localctx, 50, WDTPDParser.RULE_primary_expr);
	    try {
	        this.state = 288;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 282;
	            this.id();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 283;
	            this.literal();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 284;
	            this.function_call();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 285;
	            this.array_reference();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 286;
	            this.str_slice();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 287;
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
	    this.enterRule(localctx, 52, WDTPDParser.RULE_paren_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.match(WDTPDParser.OPEN_PAREN);
	        this.state = 291;
	        this.expression();
	        this.state = 292;
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
	    this.enterRule(localctx, 54, WDTPDParser.RULE_function_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this.function_name();
	        this.state = 295;
	        this.match(WDTPDParser.OPEN_PAREN);
	        this.state = 296;
	        this.expression();
	        this.state = 297;
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
	    this.enterRule(localctx, 56, WDTPDParser.RULE_function_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299;
	        _la = this._input.LA(1);
	        if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 15) !== 0))) {
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
	    this.enterRule(localctx, 58, WDTPDParser.RULE_array_reference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        this.id();
	        this.state = 302;
	        this.match(WDTPDParser.OPEN_PAREN);
	        this.state = 303;
	        this.additive_expr(0);
	        this.state = 304;
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
	    this.enterRule(localctx, 60, WDTPDParser.RULE_str_slice);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.id();
	        this.state = 307;
	        this.match(WDTPDParser.OPEN_BRACKET);
	        this.state = 308;
	        this.expression();
	        this.state = 311;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 309;
	            this.match(WDTPDParser.COLON);
	            this.state = 310;
	            this.expression();
	        }

	        this.state = 313;
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
	    this.enterRule(localctx, 62, WDTPDParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
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
	    this.enterRule(localctx, 64, WDTPDParser.RULE_literal);
	    try {
	        this.state = 321;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	        case 47:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 317;
	            this.number();
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 318;
	            this.match(WDTPDParser.STRING);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 319;
	            this.match(WDTPDParser.BOOLEAN);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 320;
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
	    this.enterRule(localctx, 66, WDTPDParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 323;
	            this.match(WDTPDParser.DASH);
	        }

	        this.state = 326;
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
	    this.enterRule(localctx, 68, WDTPDParser.RULE_endOfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
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
WDTPDParser.COMMA = 9;
WDTPDParser.NOT = 10;
WDTPDParser.EXPONENT = 11;
WDTPDParser.STAR = 12;
WDTPDParser.SLASH = 13;
WDTPDParser.PERCENT = 14;
WDTPDParser.PLUS = 15;
WDTPDParser.DASH = 16;
WDTPDParser.LT = 17;
WDTPDParser.GT = 18;
WDTPDParser.LTE = 19;
WDTPDParser.GTE = 20;
WDTPDParser.DOUBLE_EQUAL = 21;
WDTPDParser.DNE = 22;
WDTPDParser.DOUBLE_AMPERSAND = 23;
WDTPDParser.DOUBLE_PIPE = 24;
WDTPDParser.COLON = 25;
WDTPDParser.OPEN_PAREN = 26;
WDTPDParser.CLOSE_PAREN = 27;
WDTPDParser.OPEN_BRACKET = 28;
WDTPDParser.CLOSE_BRACKET = 29;
WDTPDParser.ABS = 30;
WDTPDParser.LEN = 31;
WDTPDParser.SQRT = 32;
WDTPDParser.INT_FUNC = 33;
WDTPDParser.IF = 34;
WDTPDParser.THEN = 35;
WDTPDParser.END_IF = 36;
WDTPDParser.WHILE = 37;
WDTPDParser.END_WHILE = 38;
WDTPDParser.FOR = 39;
WDTPDParser.TO = 40;
WDTPDParser.STEP = 41;
WDTPDParser.NEXT = 42;
WDTPDParser.INPUT = 43;
WDTPDParser.OUTPUT = 44;
WDTPDParser.ID = 45;
WDTPDParser.STRING = 46;
WDTPDParser.INTEGER = 47;
WDTPDParser.BOOLEAN = 48;
WDTPDParser.NULL = 49;
WDTPDParser.COMMENT = 50;
WDTPDParser.WS = 51;
WDTPDParser.NL = 52;

WDTPDParser.RULE_prog = 0;
WDTPDParser.RULE_stmt_list = 1;
WDTPDParser.RULE_stmt = 2;
WDTPDParser.RULE_id_list = 3;
WDTPDParser.RULE_input = 4;
WDTPDParser.RULE_output = 5;
WDTPDParser.RULE_assignment_list = 6;
WDTPDParser.RULE_assignment = 7;
WDTPDParser.RULE_if_stmt = 8;
WDTPDParser.RULE_multi_line_if_stmt = 9;
WDTPDParser.RULE_single_line_if_stmt = 10;
WDTPDParser.RULE_while_stmt = 11;
WDTPDParser.RULE_for_loop_stmt = 12;
WDTPDParser.RULE_params = 13;
WDTPDParser.RULE_expression = 14;
WDTPDParser.RULE_conditional_or_expr = 15;
WDTPDParser.RULE_conditional_and_expr = 16;
WDTPDParser.RULE_or_expr = 17;
WDTPDParser.RULE_and_expr = 18;
WDTPDParser.RULE_equality_expr = 19;
WDTPDParser.RULE_relational_expr = 20;
WDTPDParser.RULE_additive_expr = 21;
WDTPDParser.RULE_multiplicative_expr = 22;
WDTPDParser.RULE_exponent_expr = 23;
WDTPDParser.RULE_unary_expr = 24;
WDTPDParser.RULE_primary_expr = 25;
WDTPDParser.RULE_paren_expr = 26;
WDTPDParser.RULE_function_call = 27;
WDTPDParser.RULE_function_name = 28;
WDTPDParser.RULE_array_reference = 29;
WDTPDParser.RULE_str_slice = 30;
WDTPDParser.RULE_id = 31;
WDTPDParser.RULE_literal = 32;
WDTPDParser.RULE_number = 33;
WDTPDParser.RULE_endOfStatement = 34;

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
WDTPDParser.Id_listContext = Id_listContext; 
WDTPDParser.InputContext = InputContext; 
WDTPDParser.OutputContext = OutputContext; 
WDTPDParser.Assignment_listContext = Assignment_listContext; 
WDTPDParser.AssignmentContext = AssignmentContext; 
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
