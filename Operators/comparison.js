//Строгое равенство (===). Сравнивает два значения без приведения типов
//два значения равны и имеют одинковый тип
console.log(5 === 5); //true
//два значения равны и имеют разный тип
console.log('5' === 5); //false

//Строгое неравенство (!==).
console.log(5 !== '5'); //true так как типы разные
console.log(5 !== 5); //false

//больше
console.log(5 > 3); // true
//меньше
console.log(5 < 3); // false
//больше или равно
console.log(5 >= 5); // true
//меньше или равно
console.log(5 <= 3); // false

//Нестрогое равенство (==). Сравнивает два значения с приведением типов
console.log(5 == '5'); //true
console.log(5 == 5); //true
console.log(true == 1); //true

//Нестрогое неравенство (!=)
console.log(5 != '5'); // false, значения равны после приведения типа данных
console.log(true != 0); // true, true приводится к числу 1 и не равно 0
//----------------
console.log(undefined === null); //false
console.log(undefined == null); //true

console.log('0' == false); //true
console.log('0' === false); //false
