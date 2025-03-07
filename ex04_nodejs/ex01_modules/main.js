// common js style

const {add, sub, mul, div} = require("./calc.js");

var result = add(2,3);
var result1 = sub(2,3);
var result2 = mul(2,3);
var result3 = div(2,3);

console.log(`${result} : ${result1} :${result2} :${result3}`);