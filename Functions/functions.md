Функции первого класса (first-class functions) означают, что функции в JavaScript можно рассматривать как объекты первого класса. Это означает, что функции:

Можно присваивать переменным:

```javascript
const sayHello = function () {
    console.log('Hello!');
};
```

Можно передавать в качестве аргументов другим функциям:

```javascript
function greet(fn) {
    fn();
}
greet(sayHello); // Выведет "Hello!"
```

Можно возвращать из других функций:

```javascript
function createGreeter() {
    return function () {
        console.log('Hello!');
    };
}
const greeter = createGreeter();
greeter(); // Выведет "Hello!"
```

Эти возможности делают функции в JavaScript очень гибкими и мощными инструментами.

Функции высшего порядка (higher-order functions) — это функции, которые либо принимают другие функции в качестве аргументов, либо возвращают функции в качестве своих результатов, либо и то, и другое.

Функция принимает другую функцию в качестве аргумента:

```javascript
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repeat(3, console.log); // Выведет 0, 1, 2
```

Функция возвращает другую функцию:

```javascript
function greaterThan(n) {
    return function (m) {
        return m > n;
    };
}
const greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // true
```

Примеры использования

Рассмотрим несколько распространённых примеров использования функций высшего порядка в JavaScript:

Методы массива:

map: Применяет функцию к каждому элементу массива и возвращает новый массив.

```javascript
const numbers = [1, 2, 3];
const squared = numbers.map(n => n \* n);
console.log(squared); // [1, 4, 9]
```

filter: Фильтрует элементы массива на основе функции, которая возвращает true или false.

```javascript
const numbers = [1, 2, 3, 4];
const even = numbers.filter(n => n % 2 === 0);
console.log(even); // [2, 4]
```

reduce: Преобразует массив в одно значение, применяя функцию к каждому элементу и аккумулируя результат.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10
```
