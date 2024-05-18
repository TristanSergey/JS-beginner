function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}

function power(a, b) {
    return a ** b;
}

function calc(a, b, fn) {
    console.log(fn.name);
    const result = fn(a, b);
    return result;
}

const res = calc(1, 2, sum);
console.log(res);

const res2 = calc(1, 2, sub);
console.log(res2);

const res3 = calc(3, 5, power);
console.log(res3);
