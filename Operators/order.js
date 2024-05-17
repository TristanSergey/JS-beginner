//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

let a = (6 + 10) / 2;
console.log(a); //8

a = 6 + 10 / 2;
console.log(a); //11

let b;
let c;

c = b = 20 + 6;

console.log(b); //26
console.log(c); //26

b = 3 + 4 * 5;
console.log(b); //23
c = 4 * 3 ** 2;
console.log(c); //36
