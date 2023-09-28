lexer grammar WDTPDLexer;

//options { caseSensitive = false; }

ID
   : [a-zA-Z] [a-zA-Z0-9]*
   ;

LITERAL
   : INTEGER
   | STRING
   | 'true'
   | 'false'
   | 'null'
   ;

INTEGER
   : [0-9]+
   ;

STRING
   : '"' ~ '"'* '"'
   | '\'' ~ '\''* '\''
   ;

COMMENT
   : '//' ~ [\r\n]* -> skip
   ;

WS
   : [ \r\n\t]+ -> skip
   ;

COMMA: ',';
NOT: '!';
EXPONENT: ('^' | '↑');
STAR: '*';
SLASH: '/';
PERCENT: '%';
PLUS: '+';
DASH: '-';
LT: '<';
GT: '>';
LTE: '<=';
GTE: '>=';
DOUBLE_EQUAL: '==';
DNE: '!=';
DOUBLE_AMPERSAND: '&&';
DOUBLE_PIPE: '||';
COLON: ':';
OPEN_PAREN: '(';
CLOSE_PAREN: ')';
OPEN_BRACKET: '[';
CLOSE_BRACKET: ']';

IF: 'IF';
THEN: 'THEN';
END_IF: 'END IF';
WHILE: 'WHILE';
END_WHILE: 'END WHILE';
FOR: 'FOR';
TO: 'TO';
STEP: 'STEP';
NEXT: 'NEXT';