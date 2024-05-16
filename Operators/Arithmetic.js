//Арифметические операции

const height = 10;
const width = 20;

const square = height * width;
console.log(square); //200

const modifiedHeight = height + 15;

const modifiedWidth = width - 10;

const division = height / width; // 10 / 20
console.log(division); //0.5

const power = 2 ** 3; //  Возведение в степень
console.log(power); // 8

const remainder = modifiedHeight % modifiedWidth; //остаток от деления 25 % 10
console.log(remainder); //5

const integer = Math.floor(modifiedHeight / modifiedWidth); // Целочисленное деление
console.log(integer); //5
