// Generated from WDTPD.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'https://cdn.jsdelivr.net/npm/antlr4@4.13.1/+esm'
import WDTPDListener from './WDTPDListener.js';
const serializedATN = [4,1,52,319,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,1,0,1,1,1,1,1,1,5,1,70,
8,1,10,1,12,1,73,9,1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,81,8,2,1,3,1,3,1,3,5,3,
86,8,3,10,3,12,3,89,9,3,1,4,1,4,1,4,1,5,1,5,4,5,96,8,5,11,5,12,5,97,1,6,
1,6,1,6,5,6,103,8,6,10,6,12,6,106,9,6,1,7,1,7,3,7,110,8,7,1,7,1,7,1,7,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,123,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,3,8,133,8,8,3,8,135,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,
10,1,10,3,10,149,8,10,1,10,1,10,1,10,1,10,1,11,5,11,156,8,11,10,11,12,11,
159,9,11,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,5,13,169,8,13,10,13,12,
13,172,9,13,1,14,1,14,1,14,1,14,1,14,1,14,5,14,180,8,14,10,14,12,14,183,
9,14,1,15,1,15,1,15,1,15,1,15,1,15,5,15,191,8,15,10,15,12,15,194,9,15,1,
16,1,16,1,16,1,16,1,16,1,16,5,16,202,8,16,10,16,12,16,205,9,16,1,17,1,17,
1,17,1,17,1,17,1,17,5,17,213,8,17,10,17,12,17,216,9,17,1,18,1,18,1,18,1,
18,1,18,1,18,5,18,224,8,18,10,18,12,18,227,9,18,1,19,1,19,1,19,1,19,1,19,
1,19,5,19,235,8,19,10,19,12,19,238,9,19,1,20,1,20,1,20,1,20,1,20,1,20,5,
20,246,8,20,10,20,12,20,249,9,20,1,21,1,21,1,21,1,21,1,21,1,21,5,21,257,
8,21,10,21,12,21,260,9,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,269,8,
22,3,22,271,8,22,1,23,1,23,1,23,1,23,1,23,1,23,3,23,279,8,23,1,24,1,24,1,
24,1,24,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,28,
1,28,1,28,1,28,1,28,3,28,302,8,28,1,28,1,28,1,29,1,29,1,30,1,30,1,30,1,30,
3,30,312,8,30,1,31,3,31,315,8,31,1,31,1,31,1,31,0,9,26,28,30,32,34,36,38,
40,42,32,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
46,48,50,52,54,56,58,60,62,0,7,1,1,52,52,1,0,21,22,1,0,17,20,1,0,15,16,1,
0,12,14,1,0,6,8,1,0,30,33,323,0,64,1,0,0,0,2,71,1,0,0,0,4,80,1,0,0,0,6,82,
1,0,0,0,8,90,1,0,0,0,10,93,1,0,0,0,12,99,1,0,0,0,14,109,1,0,0,0,16,134,1,
0,0,0,18,136,1,0,0,0,20,142,1,0,0,0,22,157,1,0,0,0,24,160,1,0,0,0,26,162,
1,0,0,0,28,173,1,0,0,0,30,184,1,0,0,0,32,195,1,0,0,0,34,206,1,0,0,0,36,217,
1,0,0,0,38,228,1,0,0,0,40,239,1,0,0,0,42,250,1,0,0,0,44,270,1,0,0,0,46,278,
1,0,0,0,48,280,1,0,0,0,50,284,1,0,0,0,52,289,1,0,0,0,54,291,1,0,0,0,56,296,
1,0,0,0,58,305,1,0,0,0,60,311,1,0,0,0,62,314,1,0,0,0,64,65,3,2,1,0,65,1,
1,0,0,0,66,67,3,4,2,0,67,68,7,0,0,0,68,70,1,0,0,0,69,66,1,0,0,0,70,73,1,
0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,3,1,0,0,0,73,71,1,0,0,0,74,81,3,8,4,
0,75,81,3,10,5,0,76,81,3,16,8,0,77,81,3,18,9,0,78,81,3,20,10,0,79,81,3,12,
6,0,80,74,1,0,0,0,80,75,1,0,0,0,80,76,1,0,0,0,80,77,1,0,0,0,80,78,1,0,0,
0,80,79,1,0,0,0,81,5,1,0,0,0,82,87,3,58,29,0,83,84,5,9,0,0,84,86,3,58,29,
0,85,83,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,7,1,0,0,0,89,
87,1,0,0,0,90,91,5,43,0,0,91,92,3,6,3,0,92,9,1,0,0,0,93,95,5,1,0,0,94,96,
3,24,12,0,95,94,1,0,0,0,96,97,1,0,0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,11,
1,0,0,0,99,104,3,14,7,0,100,101,5,25,0,0,101,103,3,14,7,0,102,100,1,0,0,
0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,13,1,0,0,0,106,104,
1,0,0,0,107,110,3,58,29,0,108,110,3,54,27,0,109,107,1,0,0,0,109,108,1,0,
0,0,110,111,1,0,0,0,111,112,5,2,0,0,112,113,3,24,12,0,113,15,1,0,0,0,114,
115,5,34,0,0,115,116,3,24,12,0,116,117,5,35,0,0,117,118,5,52,0,0,118,122,
3,2,1,0,119,120,5,3,0,0,120,121,5,52,0,0,121,123,3,2,1,0,122,119,1,0,0,0,
122,123,1,0,0,0,123,124,1,0,0,0,124,125,5,36,0,0,125,135,1,0,0,0,126,127,
5,34,0,0,127,128,3,24,12,0,128,129,5,35,0,0,129,132,3,4,2,0,130,131,5,3,
0,0,131,133,3,4,2,0,132,130,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,
114,1,0,0,0,134,126,1,0,0,0,135,17,1,0,0,0,136,137,5,37,0,0,137,138,3,24,
12,0,138,139,5,52,0,0,139,140,3,2,1,0,140,141,5,38,0,0,141,19,1,0,0,0,142,
143,5,39,0,0,143,144,3,14,7,0,144,145,5,40,0,0,145,148,3,24,12,0,146,147,
5,41,0,0,147,149,3,24,12,0,148,146,1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,
0,150,151,5,52,0,0,151,152,3,2,1,0,152,153,5,42,0,0,153,21,1,0,0,0,154,156,
3,24,12,0,155,154,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,
0,158,23,1,0,0,0,159,157,1,0,0,0,160,161,3,26,13,0,161,25,1,0,0,0,162,163,
6,13,-1,0,163,164,3,28,14,0,164,170,1,0,0,0,165,166,10,1,0,0,166,167,5,24,
0,0,167,169,3,26,13,2,168,165,1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,
171,1,0,0,0,171,27,1,0,0,0,172,170,1,0,0,0,173,174,6,14,-1,0,174,175,3,30,
15,0,175,181,1,0,0,0,176,177,10,1,0,0,177,178,5,23,0,0,178,180,3,30,15,0,
179,176,1,0,0,0,180,183,1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,182,29,1,
0,0,0,183,181,1,0,0,0,184,185,6,15,-1,0,185,186,3,32,16,0,186,192,1,0,0,
0,187,188,10,1,0,0,188,189,5,4,0,0,189,191,3,32,16,0,190,187,1,0,0,0,191,
194,1,0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,31,1,0,0,0,194,192,1,0,0,
0,195,196,6,16,-1,0,196,197,3,34,17,0,197,203,1,0,0,0,198,199,10,1,0,0,199,
200,5,5,0,0,200,202,3,34,17,0,201,198,1,0,0,0,202,205,1,0,0,0,203,201,1,
0,0,0,203,204,1,0,0,0,204,33,1,0,0,0,205,203,1,0,0,0,206,207,6,17,-1,0,207,
208,3,36,18,0,208,214,1,0,0,0,209,210,10,1,0,0,210,211,7,1,0,0,211,213,3,
36,18,0,212,209,1,0,0,0,213,216,1,0,0,0,214,212,1,0,0,0,214,215,1,0,0,0,
215,35,1,0,0,0,216,214,1,0,0,0,217,218,6,18,-1,0,218,219,3,38,19,0,219,225,
1,0,0,0,220,221,10,1,0,0,221,222,7,2,0,0,222,224,3,38,19,0,223,220,1,0,0,
0,224,227,1,0,0,0,225,223,1,0,0,0,225,226,1,0,0,0,226,37,1,0,0,0,227,225,
1,0,0,0,228,229,6,19,-1,0,229,230,3,40,20,0,230,236,1,0,0,0,231,232,10,1,
0,0,232,233,7,3,0,0,233,235,3,40,20,0,234,231,1,0,0,0,235,238,1,0,0,0,236,
234,1,0,0,0,236,237,1,0,0,0,237,39,1,0,0,0,238,236,1,0,0,0,239,240,6,20,
-1,0,240,241,3,42,21,0,241,247,1,0,0,0,242,243,10,1,0,0,243,244,7,4,0,0,
244,246,3,42,21,0,245,242,1,0,0,0,246,249,1,0,0,0,247,245,1,0,0,0,247,248,
1,0,0,0,248,41,1,0,0,0,249,247,1,0,0,0,250,251,6,21,-1,0,251,252,3,44,22,
0,252,258,1,0,0,0,253,254,10,1,0,0,254,255,7,5,0,0,255,257,3,44,22,0,256,
253,1,0,0,0,257,260,1,0,0,0,258,256,1,0,0,0,258,259,1,0,0,0,259,43,1,0,0,
0,260,258,1,0,0,0,261,271,3,46,23,0,262,263,5,15,0,0,263,269,3,44,22,0,264,
265,5,16,0,0,265,269,3,44,22,0,266,267,5,10,0,0,267,269,3,44,22,0,268,262,
1,0,0,0,268,264,1,0,0,0,268,266,1,0,0,0,269,271,1,0,0,0,270,261,1,0,0,0,
270,268,1,0,0,0,271,45,1,0,0,0,272,279,3,58,29,0,273,279,3,60,30,0,274,279,
3,50,25,0,275,279,3,54,27,0,276,279,3,56,28,0,277,279,3,48,24,0,278,272,
1,0,0,0,278,273,1,0,0,0,278,274,1,0,0,0,278,275,1,0,0,0,278,276,1,0,0,0,
278,277,1,0,0,0,279,47,1,0,0,0,280,281,5,26,0,0,281,282,3,24,12,0,282,283,
5,27,0,0,283,49,1,0,0,0,284,285,3,52,26,0,285,286,5,26,0,0,286,287,3,24,
12,0,287,288,5,27,0,0,288,51,1,0,0,0,289,290,7,6,0,0,290,53,1,0,0,0,291,
292,3,58,29,0,292,293,5,26,0,0,293,294,3,38,19,0,294,295,5,27,0,0,295,55,
1,0,0,0,296,297,3,58,29,0,297,298,5,28,0,0,298,301,3,24,12,0,299,300,5,25,
0,0,300,302,3,24,12,0,301,299,1,0,0,0,301,302,1,0,0,0,302,303,1,0,0,0,303,
304,5,29,0,0,304,57,1,0,0,0,305,306,5,45,0,0,306,59,1,0,0,0,307,312,3,62,
31,0,308,312,5,46,0,0,309,312,5,48,0,0,310,312,5,49,0,0,311,307,1,0,0,0,
311,308,1,0,0,0,311,309,1,0,0,0,311,310,1,0,0,0,312,61,1,0,0,0,313,315,5,
16,0,0,314,313,1,0,0,0,314,315,1,0,0,0,315,316,1,0,0,0,316,317,5,47,0,0,
317,63,1,0,0,0,26,71,80,87,97,104,109,122,132,134,148,157,170,181,192,203,
214,225,236,247,258,268,270,278,301,311,314];


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
                         "while_stmt", "for_loop_stmt", "params", "expression", 
                         "conditional_or_expr", "conditional_and_expr", 
                         "or_expr", "and_expr", "equality_expr", "relational_expr", 
                         "additive_expr", "multiplicative_expr", "exponent_expr", 
                         "unary_expr", "primary_expr", "paren_expr", "function_call", 
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
	        this.state = 64;
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
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || ((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 2601) !== 0)) {
	            this.state = 66;
	            this.stmt();
	            this.state = 67;
	            _la = this._input.LA(1);
	            if(!(_la===-1 || _la===52)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 73;
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
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 43:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            this.input();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.output();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 76;
	            this.if_stmt();
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 77;
	            this.while_stmt();
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 78;
	            this.for_loop_stmt();
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 79;
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
	        this.state = 82;
	        this.id();
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 83;
	            this.match(WDTPDParser.COMMA);
	            this.state = 84;
	            this.id();
	            this.state = 89;
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
	        this.state = 90;
	        this.match(WDTPDParser.INPUT);
	        this.state = 91;
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
	        this.state = 93;
	        this.match(WDTPDParser.T__0);
	        this.state = 95; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 94;
	            this.expression();
	            this.state = 97; 
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
	        this.state = 99;
	        this.assignment();
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===25) {
	            this.state = 100;
	            this.match(WDTPDParser.COLON);
	            this.state = 101;
	            this.assignment();
	            this.state = 106;
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
	        this.state = 109;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 107;
	            this.id();
	            break;

	        case 2:
	            this.state = 108;
	            this.array_reference();
	            break;

	        }
	        this.state = 111;
	        this.match(WDTPDParser.T__1);
	        this.state = 112;
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
	    var _la = 0;
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.match(WDTPDParser.IF);
	            this.state = 115;
	            this.expression();
	            this.state = 116;
	            this.match(WDTPDParser.THEN);
	            this.state = 117;
	            this.match(WDTPDParser.NL);
	            this.state = 118;
	            this.stmt_list();
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===3) {
	                this.state = 119;
	                this.match(WDTPDParser.T__2);
	                this.state = 120;
	                this.match(WDTPDParser.NL);
	                this.state = 121;
	                this.stmt_list();
	            }

	            this.state = 124;
	            this.match(WDTPDParser.END_IF);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this.match(WDTPDParser.IF);
	            this.state = 127;
	            this.expression();
	            this.state = 128;
	            this.match(WDTPDParser.THEN);
	            this.state = 129;
	            this.stmt();
	            this.state = 132;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	            if(la_===1) {
	                this.state = 130;
	                this.match(WDTPDParser.T__2);
	                this.state = 131;
	                this.stmt();

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



	while_stmt() {
	    let localctx = new While_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, WDTPDParser.RULE_while_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(WDTPDParser.WHILE);
	        this.state = 137;
	        this.expression();
	        this.state = 138;
	        this.match(WDTPDParser.NL);
	        this.state = 139;
	        this.stmt_list();
	        this.state = 140;
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
	        this.state = 142;
	        this.match(WDTPDParser.FOR);
	        this.state = 143;
	        this.assignment();
	        this.state = 144;
	        this.match(WDTPDParser.TO);
	        this.state = 145;
	        this.expression();
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 146;
	            this.match(WDTPDParser.STEP);
	            this.state = 147;
	            this.expression();
	        }

	        this.state = 150;
	        this.match(WDTPDParser.NL);
	        this.state = 151;
	        this.stmt_list();
	        this.state = 152;
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
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3288433664) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 253955) !== 0)) {
	            this.state = 154;
	            this.expression();
	            this.state = 159;
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
	        this.state = 160;
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
	        this.state = 163;
	        this.conditional_and_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 170;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Conditional_or_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_conditional_or_expr);
	                this.state = 165;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 166;
	                this.match(WDTPDParser.DOUBLE_PIPE);
	                this.state = 167;
	                this.conditional_or_expr(2); 
	            }
	            this.state = 172;
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
	        this.state = 174;
	        this.or_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 181;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Conditional_and_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_conditional_and_expr);
	                this.state = 176;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 177;
	                this.match(WDTPDParser.DOUBLE_AMPERSAND);
	                this.state = 178;
	                this.or_expr(0); 
	            }
	            this.state = 183;
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
	        this.state = 185;
	        this.and_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 192;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Or_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_or_expr);
	                this.state = 187;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 188;
	                this.match(WDTPDParser.T__3);
	                this.state = 189;
	                this.and_expr(0); 
	            }
	            this.state = 194;
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
	        this.state = 196;
	        this.equality_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 203;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new And_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_and_expr);
	                this.state = 198;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 199;
	                this.match(WDTPDParser.T__4);
	                this.state = 200;
	                this.equality_expr(0); 
	            }
	            this.state = 205;
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
	        this.state = 207;
	        this.relational_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 214;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Equality_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_equality_expr);
	                this.state = 209;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 210;
	                _la = this._input.LA(1);
	                if(!(_la===21 || _la===22)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 211;
	                this.relational_expr(0); 
	            }
	            this.state = 216;
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
	        this.state = 218;
	        this.additive_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 225;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Relational_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_relational_expr);
	                this.state = 220;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 221;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1966080) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 222;
	                this.additive_expr(0); 
	            }
	            this.state = 227;
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
	        this.state = 229;
	        this.multiplicative_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 236;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Additive_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_additive_expr);
	                this.state = 231;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 232;
	                _la = this._input.LA(1);
	                if(!(_la===15 || _la===16)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 233;
	                this.multiplicative_expr(0); 
	            }
	            this.state = 238;
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
	        this.state = 240;
	        this.exponent_expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 247;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Multiplicative_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_multiplicative_expr);
	                this.state = 242;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 243;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 244;
	                this.exponent_expr(0); 
	            }
	            this.state = 249;
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
	        this.state = 251;
	        this.unary_expr();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 258;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Exponent_exprContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WDTPDParser.RULE_exponent_expr);
	                this.state = 253;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 254;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 448) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 255;
	                this.unary_expr(); 
	            }
	            this.state = 260;
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



	unary_expr() {
	    let localctx = new Unary_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, WDTPDParser.RULE_unary_expr);
	    try {
	        this.state = 270;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 261;
	            this.primary_expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 268;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 15:
	                this.state = 262;
	                this.match(WDTPDParser.PLUS);
	                this.state = 263;
	                this.unary_expr();
	                break;
	            case 16:
	                this.state = 264;
	                this.match(WDTPDParser.DASH);
	                this.state = 265;
	                this.unary_expr();
	                break;
	            case 10:
	                this.state = 266;
	                this.match(WDTPDParser.NOT);
	                this.state = 267;
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
	        this.state = 278;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 272;
	            this.id();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 273;
	            this.literal();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 274;
	            this.function_call();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 275;
	            this.array_reference();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 276;
	            this.str_slice();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 277;
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
	    this.enterRule(localctx, 48, WDTPDParser.RULE_paren_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(WDTPDParser.OPEN_PAREN);
	        this.state = 281;
	        this.expression();
	        this.state = 282;
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
	    this.enterRule(localctx, 50, WDTPDParser.RULE_function_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.function_name();
	        this.state = 285;
	        this.match(WDTPDParser.OPEN_PAREN);
	        this.state = 286;
	        this.expression();
	        this.state = 287;
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
	    this.enterRule(localctx, 52, WDTPDParser.RULE_function_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
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
	    this.enterRule(localctx, 54, WDTPDParser.RULE_array_reference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 291;
	        this.id();
	        this.state = 292;
	        this.match(WDTPDParser.OPEN_PAREN);
	        this.state = 293;
	        this.additive_expr(0);
	        this.state = 294;
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
	    this.enterRule(localctx, 56, WDTPDParser.RULE_str_slice);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.id();
	        this.state = 297;
	        this.match(WDTPDParser.OPEN_BRACKET);
	        this.state = 298;
	        this.expression();
	        this.state = 301;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 299;
	            this.match(WDTPDParser.COLON);
	            this.state = 300;
	            this.expression();
	        }

	        this.state = 303;
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
	    this.enterRule(localctx, 58, WDTPDParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
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
	    this.enterRule(localctx, 60, WDTPDParser.RULE_literal);
	    try {
	        this.state = 311;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	        case 47:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 307;
	            this.number();
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 308;
	            this.match(WDTPDParser.STRING);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 309;
	            this.match(WDTPDParser.BOOLEAN);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 310;
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
	    this.enterRule(localctx, 62, WDTPDParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 313;
	            this.match(WDTPDParser.DASH);
	        }

	        this.state = 316;
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
WDTPDParser.RULE_paren_expr = 24;
WDTPDParser.RULE_function_call = 25;
WDTPDParser.RULE_function_name = 26;
WDTPDParser.RULE_array_reference = 27;
WDTPDParser.RULE_str_slice = 28;
WDTPDParser.RULE_id = 29;
WDTPDParser.RULE_literal = 30;
WDTPDParser.RULE_number = 31;

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
WDTPDParser.Paren_exprContext = Paren_exprContext; 
WDTPDParser.Function_callContext = Function_callContext; 
WDTPDParser.Function_nameContext = Function_nameContext; 
WDTPDParser.Array_referenceContext = Array_referenceContext; 
WDTPDParser.Str_sliceContext = Str_sliceContext; 
WDTPDParser.IdContext = IdContext; 
WDTPDParser.LiteralContext = LiteralContext; 
WDTPDParser.NumberContext = NumberContext; 
