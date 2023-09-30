export function isNumberLiteral(v) {
    return typeof v == 'number' || typeof v == 'int' || typeof v == 'float' || v instanceof Number
};
export function isStringLiteral(v) {
    return typeof v == 'string' || v instanceof String
};