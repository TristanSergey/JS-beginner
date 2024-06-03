'use strict';

//setTimeout(() => console.log('ok'), 2000);

// console.log(1);
// const message = ['Hello', 'World', '!'];
// const timer1 = setTimeout(
//     (msg1, msg2, msg3) => {
//         console.log(2);
//         console.log(msg1);
//         console.log(msg2);
//         console.log(msg3);
//     },
//     2000,
//     ...message,
// );
// //clearTimeout(timer1);

// console.log(3);

// const int = setInterval(() => {
//     console.log(new Date());
// }, 1000);

// setTimeout(() => {
//     clearInterval(int);
// }, 5000);

const options_1 = {
    minute: 'numeric',
    second: 'numeric',
};

let delay = 500000;

function countDown(delay) {
    const int = setInterval(() => {
        delay -= 1000;
        console.log(new Intl.DateTimeFormat('ru-Ru', options_1).format(delay));
    }, 1000);

    setTimeout(() => {
        console.log('ok');
        clearInterval(int);
    }, delay + 50);
}

countDown(delay);
