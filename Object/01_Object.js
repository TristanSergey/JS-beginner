const userArray = ['Вася', 'Пупкин', 35];
const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 35,
    skills: ['Программирование', ' Готовка'],
    1: 1,
};

//member access notation - доступ по ключу
//Точечная нотация (Dot Notation)
console.log(user);
console.log(user.name);
console.log(user.skills[0]);

//Нотация с квадратными скобками (Bracket Notation)
console.log(user['name']);
console.log(user['skills'][0]);

const users = [
    {
        name: 'Вася',
        age: 35,
    },
    {
        name: 'Петя',
        age: 28,
    },
    {
        name: 'Саша',
        age: 40,
    },
    {
        name: 'Маша',
        age: 25,
    },
    {
        name: 'Даша',
        age: 30,
    },
];

users.sort((a, b) => a.age - b.age);
console.log(users);
