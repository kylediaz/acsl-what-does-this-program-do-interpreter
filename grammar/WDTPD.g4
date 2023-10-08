grammar WDTPD;	

options { caseInsensitive = true; }

prog: stmt_list;
stmt_list: (stmt (endOfStatement|EOF))*;

// Logical Blocks

stmt: 
      input
    | output
    | if_stmt
    | while_stmt
    | for_loop_stmt
    | assignment_list
    ;

reference_list: reference (',' reference)*;
argument_list: expression (',' expression)*;

input: 'INPUT' reference_list;
output: 'OUTPUT' argument_list;

assignment_list: assignment (':' assignment)*;
assignment: reference '=' expression;
reference: id | array_reference;

if_stmt: multi_line_if_stmt | single_line_if_stmt;

multi_line_if_stmt:
   'IF' expression 'THEN' NL
        stmt_list 
    ('ELSE' NL
        stmt_list
    )? 
    'END IF';
single_line_if_stmt: 'IF' expression 'THEN' stmt ('ELSE' stmt)?;


while_stmt: 
    'WHILE' expression NL
        stmt_list
    'END WHILE';

for_loop_stmt: 
    'FOR' assignment 'TO' expression ('STEP' expression)? NL
        stmt_list
    'NEXT';
    
// Expressions

params: expression*;

expression: conditional_or_expr;
conditional_or_expr: conditional_and_expr | conditional_or_expr '||' conditional_or_expr;
conditional_and_expr: or_expr | conditional_and_expr '&&' or_expr;
or_expr: and_expr | or_expr '|' and_expr;
and_expr: equality_expr | and_expr '&' equality_expr;

equality_expr: relational_expr | equality_expr ('==' | '!=') relational_expr;
relational_expr: additive_expr | relational_expr ('<' | '>' | '>=' | '<=') additive_expr;

additive_expr: multiplicative_expr | additive_expr ('+' | '-') multiplicative_expr;
multiplicative_expr: exponent_expr | multiplicative_expr ('*' | '/' | '%') exponent_expr;
exponent_expr: unary_expr | exponent_expr ('^' | '↑' |'**') unary_expr;
unary_expr
    : primary_expr
    | ('+' unary_expr
    | '-' unary_expr
    | '!' unary_expr
    );

primary_expr: reference | literal | function_call | str_slice | paren_expr;

paren_expr: '(' expression ')';

function_call: function_name '(' expression ')';
function_name: ABS | INT_FUNC | SQRT | LEN; 

array_reference: id '(' argument_list ')';
str_slice: id '[' expression (':' expression)? ']';

id: ID;

literal
    : number
    | STRING
    | BOOLEAN
    | NULL
    ;
    
number: DASH? INTEGER;

endOfStatement: NL<hidden>;

// Lexer

EQUALS: '=';
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
LTE: LT WS* EQUALS;
GTE: '>' WS* '=';
EQEQ: EQUALS WS* EQUALS;
DNE: '!' WS* EQUALS;
AMPERSAND: '&';
DOUBLE_AMPERSAND: AMPERSAND WS* AMPERSAND;
PIPE: '|';
DOUBLE_PIPE: PIPE WS* PIPE;
COLON: ':';
OPEN_PAREN: '(';
CLOSE_PAREN: ')';
OPEN_BRACKET: '[';
CLOSE_BRACKET: ']';

ABS:      'abs';
LEN:      'len';
SQRT:     'sqrt';
INT_FUNC: 'int';

IF: 'IF';
THEN: 'THEN';
END_IF: 'END IF';
WHILE: 'WHILE';
END_WHILE: 'END WHILE';
FOR: 'FOR';
TO: 'TO';
STEP: 'STEP';
NEXT: 'NEXT';
INPUT: 'INPUT';
OUTPUT: 'OUTPUT' | 'PRINT';

ID
   : [A-Z] [A-Z0-9]*
   ;
 
STRING
   : '"' ~ '"'* '"'
   | '\'' ~ '\''* '\''
   ;

INTEGER
   : [0-9]+
   ;
   
BOOLEAN
    : 'False'
    | 'True'
    ;

NULL
    : 'null'
    | 'None';

COMMENT
   : '//' ~ [\r\n]* -> skip
   ;

fragment WS: [ \t]; 
WSSKIP: WS+ -> skip;
   
NL: ('\r'? '\n');