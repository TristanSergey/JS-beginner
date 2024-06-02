'use strict';

// addEventListener('load', () => {
//     console.log(document);
// });

// console.log(document.querySelector('.panel').innerText);
// console.log(1223345);
// document.querySelector('.panel').innerText = 'hello';
// console.log(document.querySelector('.panel').innerText);
// document.querySelector('.input').value = 'Text';
// console.log(document.querySelector('.input').value);

// document.querySelector('.button').addEventListener('click', function () {
//     console.log('click');
// });

const value = {
    text: '',
};

let countKey = 0;
let wheaterMap = new Map([
    ['Moscov', 16],
    ['SPB', 18],
    ['RND', 25],
    ['KRS', 30],
]);
console.log(wheaterMap);

wheaterMap = new Map([...wheaterMap].map(item => item.reverse()));

console.log(wheaterMap);
// function submitForm() {
//     const input = document.querySelector('.input').value;
//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
//     // const atr = document.querySelector('.notification').getAttribute('class');
//     value.text = '';
//     value.text = input;

//     let s = JSON.stringify({
//         text: input,
//     });
//     console.log(s);
//     localStorage.setItem('text' + countKey, s);
//     countKey++;
// }

// document.querySelector('.input').addEventListener('keyup', function (e) {
//     if (e.key === 'Enter') {
//         submitForm();
//     }
// });

// function inputChange(e) {
//     if (e.code === 'Enter') {
//         submitForm();
//     }
// }

// const elements = document.querySelectorAll('.one');
// console.log(elements.length);
// elements.forEach(element => {
//     console.log(element.innerText);
// });

// const panelText = 'Панель';
// const panelClass = 'button';
// const elTwo = document.querySelector('#two').innerText;
// console.log(elTwo);
// let elThree = document.querySelector('[user-id="4"]');
// console.log(elThree.innerText);

// const newElement = document.createElement('div');
// newElement.setAttribute('user-id', 1);
// newElement.classList.add('panel');
// //newElement.innerText = 'button';
// newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`;
// document.querySelector('.test').appendChild(newElement);

// localStorage.setItem('token', 'muElement');
// localStorage.setItem('token1', 123);
// localStorage.setItem('token2', true);

// const token = localStorage.getItem('token');

// console.log(token);

// const obj = JSON.parse('{"a": 1, "b": 2}');
// console.log(obj);
// const str = JSON.stringify(obj);
// console.log(str);
