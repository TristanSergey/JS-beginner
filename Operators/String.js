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
console.log(str);

//Сложение строки с числом => конкатенация строк
str1 = '12';
str2 = 3;
let str3 = str1 + str2;
console.log(str3); //"123"

//Вычитание строк
str2 = '3';
str3 = str1 - str2;
console.log(str3); //9

//Умножение строк
str3 = str1 * str2;
console.log(str3); //36

//Деление строк
str3 = str1 / str2;
console.log(str3); //4
