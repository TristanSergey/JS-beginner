// 1
console.log(true + false + true); // 2

// 2
var arr = ['1', '2', '3'].map(parseInt);
console.log(arr); // [1, NaN, NaN]

//3
let a = 5;
if (a) {
    let a = 2;
    a *= a;
}
console.log(a); // 5

//4
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1); // [(1, 2, 3, 4)];

//5
const array = [1, 2, 3];
array.reverse();
console.log(array); //[(3, 2, 1)];

// const array = [1, 2, 3];
// array.sort();
// console.log(array);

// const array = [1, 2, 3];
// array.splice(1, 1);
// console.log(array);

// const array = [1, 2, 3];
// array.shift();
// console.log(array);

// const array = [1, 2, 3];
// array.unshift(0);
// console.log(array);
// 6
const b = 'Hello World';
const number = ~b.indexOf('lo');
console.log(number); // -4

// 7

let greeting;
greetign = {};
console.log(greetign); // {}

// 8
var myArray = ['foo', 42, 'bar'];
myArray['3'] = 'baz';
console.log(myArray.length); // 4
console.log(myArray[3]); // "baz"

// 9
