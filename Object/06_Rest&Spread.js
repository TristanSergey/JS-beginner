const user = {
    name: 'alex',
    age: 40,
    city: 'Rnd',
};

let person = {
    name: 'mike',
    agePerson: 26,
    city: 'msk',
};
const { age, name } = user;
console.log(age);

// Destructuring an object:

//rest operator for objects

const { agePerson, ...personWithoutAge } = person;
console.log(personWithoutAge);

const additionalData = {
    skills: ['html', 'css', 'js'],
    edication: 'high',
};

user.skills = additionalData.skills;
user.edication = additionalData.edication;
console.log(user);

//spread operator for objects

person = {
    ...person,
    ...additionalData,
};

console.log(person);
