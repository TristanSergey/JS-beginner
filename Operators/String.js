//конкатенация строк
let str1 = 'Петя';
let str2 = 'Иванов';
let concatStr = str1 + ' ' + str2;
console.log(concatStr);

//присваивание с добавлением
let addStr = str1;
addStr += str2;
console.log(addStr);

// сравнение строк
const strCompare = str1 > str2; //так как код "П" больше, чем код "И" => true
console.log(strCompare); //true

//сложение строк с другими типами данных
let num = 42;
let str = 'My age is ' + num;
console.log(str); //'My age is 42'

//Сложение строки с числом => конкатенация строк
str1 = '12';
num = 3;
let castType = str1 + num;
console.log(castType); //"123"

//Вычитание строк
str2 = '3';
castType = str1 - str2;
console.log(castType); //9

//Умножение строк
castType = str1 * str2;
console.log(castType); //36

//Деление строк
castType = str1 / str2;
console.log(castType); //4

//разные примеры
castType = '' - 1 + 0;
console.log(castType); //-1

castType = 10 + 15 + ' min';
console.log(castType); //25 min

castType = 'min ' + 10 + 15;
console.log(castType); //min 1015

castType = '14 min ' - 4;
console.log(castType); //NaN

castType = null - 4;
console.log(castType); //-4

castType = undefined + 14;
console.log(castType); //NaN
