'use strict';

const user = {
    name: 'Anton',
    id: 1,
    skills: ['JS', 'React', 'Redux'],
};

user.name = 'Peter';
console.log(user.name); // Peter

//TypeError: Assignment to constant variable.
// user = {
//     name: 'Mike',
//     id: 2,
// };

const person = user;
user.name = 'Mike';
console.log(user.name); //Mike
console.log(person.name); //Mike

//поверхностное копирование объекта

const newUser = Object.assign({}, user);
newUser.name = 'Serg';
console.log(user.name); //Mike
console.log(newUser); //Serg
newUser.skills.push('Html');
console.log(newUser);

//поверхностное копирование объекта

const newUser2 = {
    ...user,
};

newUser2.name = 'Vasya';
newUser2.skills.push('Angular');
console.log(user); //{ name: 'Mike', id: 1, skills: [ 'JS', 'React', 'Redux', 'Angular' ] }
console.log(newUser2); //{ name: 'Vasya', id: 1, skills: [ 'JS', 'React', 'Redux', 'Angular' ] }
