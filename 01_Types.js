//Типы данных
//Примитивные: number, string, boolean, symbol , null, undefained, bigint
//Не примитивный: object
console.log(typeof 5); //number
console.log(typeof 5.5); //number
console.log(typeof true); //boolean
console.log(typeof '5'); //string
console.log(typeof undefined); //undefined
console.log(typeof Math); //object
console.log(typeof new Date()); //object
console.log(typeof {}); //object
console.log(typeof Symbol('JavaScript')); //symbol

console.log(typeof null); //object хотя должен быть null

console.log(typeof function () {}); //function хотя должен быть object

//Not a number
console.log(typeof NaN); //number хотя по идее должно быть не число
console.log(typeof (1 / 0)); //number
console.log(undefined * 1); //NaN

//Приведение типов
//0, null, false, undefined, NaN, '' - false values
console.log(Boolean('')); //false;
console.log(Boolean(0)); //false;
console.log(Boolean('asd')); //true
console.log(Boolean(' ')); //true
console.log(Boolean('0')); //true
console.log(Boolean(null)); //false;
console.log(Boolean([])); //true;
console.log(Boolean({})); //true;
console.log(Boolean(function () {})); //true;
