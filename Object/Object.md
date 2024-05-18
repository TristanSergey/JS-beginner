**"Enhance Object Literals" (Улучшенные объектные литералы)** - это одна из возможностей, представленных в стандарте ECMAScript 2015 (ES6), которая упрощает и делает более выразительным создание объектов в JavaScript. Улучшения касаются синтаксиса создания объектных литералов, включая короткие записи для методов и свойств, вычисляемые имена свойств, а также способ задания значений свойств из переменных.

**Короткие записи свойств (Shorthand Property Names)**

Когда имя свойства совпадает с именем переменной, можно использовать сокращенную запись.

Вместо:

```js
const person = {
    name: name,
    age: age,
};
```

Следующим образом:

```js
const name = 'Alice';
const age = 30;
const person = {
    name,
    age,
};

console.log(person); // { name: 'Alice', age: 30 }
```

**Короткие записи методов (Shorthand Method Names)**

Методы объекта можно объявлять в сокращенной форме.

Вместо:

```javascript
const person = {
    name: 'Alice',
    age: 30,
    greet: function () {
        console.log('Hello!');
    },
};
```

Вот так:

```js
const person = {
    name: 'Alice',
    age: 30,
    greet() {
        console.log('Hello!');
    },
};

person.greet(); // Hello!
```

**Вычисляемые имена свойств (Computed Property Names)**

Можно использовать выражения в квадратных скобках для задания имен свойств:

```javascript
const propName = 'age';

const person = {
    name: 'Alice',
    [propName]: 30,
};

console.log(person); // { name: 'Alice', age: 30 }
```

**Полный пример**

```js
const propName = 'age';
const name = 'Alice';
const age = 30;

const person = {
    name,
    [propName]: age,
    greet() {
        console.log('Hello!');
    },
};

console.log(person); // { name: 'Alice', age: 30, greet: [Function: greet] }
person.greet(); // Hello!
```
