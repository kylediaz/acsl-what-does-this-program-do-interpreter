grammar WDTPD;	

prog: stmt+ EOF;

// Logical Blocks

stmt: 
      input
    | output
    | assignment
    | array_assignment
    | if_stmt
    | while_stmt
    | for_loop_stmt;

id_list: ID (',' WS ID)*;

input: 'INPUT' WS id_list;
output: 'OUTPUT' WS id_list;

assignment: ID '=' expression;
array_assignment: array_reference '=' expression;

if_stmt: 
    'IF' WS expression WS 'THEN' WS 
        stmt+ 
    ('ELSE' WS
        stmt+
    )? 
    'END IF';

while_stmt: 
    'WHILE' WS expression WS
        stmt+ 
    'END WHILE';

for_loop_stmt: 
    'FOR' WS assignment WS 'TO' WS expression WS 'STEP' WS expression WS
        stmt+
    'NEXT';

// Expressions

expression: term | expression ('+' | '-') expression;
term: factor | term ('*' | '/') term;
factor: '!' factor | operand;
operand: ID | LITERAL | array_reference | str_slice | '(' expression ')';
array_reference: ID '(' expression ')';
str_slice: ID '[' expression (':' expression)? ']';

// Lexer

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