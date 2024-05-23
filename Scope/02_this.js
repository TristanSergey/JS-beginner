'use strict';

console.log(this);
function addNum(num1, num2) {
    console.log(this);
    return num1 + num2;
}
addNum(4, 5);

const addNum2 = (num1, num2) => {
    console.log(this);
    return num1 + num2;
};

addNum2();

const user = {
    name: 'Serg',
    surname: 'Ivanov',
    getFullName: function () {
        console.log(this);
        return this.name + ' ' + this.surname;
    },
};

user.getFullName();

const user2 = {
    name: 'Mike',
    surname: 'Semenov',
};

user2.getFullName = user.getFullName;
user2.getFullName();

const getFullName = user2.getFullName;
getFullName();
