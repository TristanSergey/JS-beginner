const a = 'hello';
/* prettier-ignore-start */
let b = 'world'; //можно использовать двойные кавычки
/* prettier-ignore-end */
let c = `У обратных кавчек есть особенности. В них можно оборачивать выражение типа ${b}. Это называется шаблонная строка`;

const width = 100;
const height = 200;
const areaString = `Так мы вычисляем площадь прямоугольника со сторонами ${width} и ${height} и выводим его в консоль. Выражение ${
    width * height
} будет выведено в консоль.`;

console.log(areaString);

let str = 'I am a JavaScript "developer" and I love to code.';
//в одинарных кавычках экранируют одинарные кавычки. Двойные кавычки экранируют двойные кавычки. Символы слеша \ тоже экранируются.

str = 'Cимвол \\';
console.log(str);

/*
\n - перевод строки
\' - одиночная кавычка
\" - двойная кавычка
\t - табуляция
\b - backspace (возврат на один символ назад)
\r - возврат каретки
\f - разрыв страницы
\v - вертикальная табуляция
\xXX - символ в кодировке ISO Latin-1, например: \xA9 - ©
\uXXXX - символ в кодировке UTF-16, например: \u00A9 - ©
*/

const length = str.length; //возвращает длину строки
console.log(length);

//доступ к элементам строки
str = 'Мой ласковый и нежный зверь';
console.log(str[0]);
console.log(str[10]);
str = 'abcd';
//строку можно перебрать посимвольно с помощью цикла
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

for (let char of str) {
    console.log(char);
}

// Хотя строки непосредственно не поддерживают метод forEach, можно преобразовать строку в массив и использовать forEach.
Array.from(str).forEach(char => {
    console.log(char);
});

//строка не изеняема. Immutable.
str = 'abcd';
str[0] = 'A';
console.log(str);
