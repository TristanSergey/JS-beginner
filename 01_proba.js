const arr = [1, 3, 4];

console.log(arr);

arr[5] = 6;

console.log(arr);
console.log(arr.length);

let newList = [1, 2, 3].push(4);
console.log(newList.length);
console.log(newList.push(5));

// const fun = [];

// function sum(a, b) {
//     return a + b;
// }

// function mul(a, b) {
//     return a * b;
// }

// fun.push(sum);
// fun.push(mul);

// console.log(fun[0](2, 3));
// console.log(fun[1](2, 3));

// function step() {
//     let count = 0;

//     function stepping(num) {
//         count += num;
//         return count;
//     }
//     return stepping;
// }

// let s = step();
// console.log(s(2));

// console.log(s(3));
// console.log(s(3));
// console.log(s(3));

// var a = 20; // глобальная переменная

// function foo() {
//     console.log(this.a);
// }

// const obj1 = {
//     foo: foo,
//     a: 12,
// };

// const obj2 = {
//     a: 16,
//     foo: foo,
// };

// foo(); // что здесь будет?
// obj1.foo(); // 12
// obj2.foo(); // 16

// function fun() {
//     console.log(this.a);
// }

// let a = 'Hello';

// const obj = {
//     a: 'World',
//     fun: fun,
// };

// const fn = obj.fun;

// fn();
