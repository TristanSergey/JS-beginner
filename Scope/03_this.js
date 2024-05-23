'use strict';
const company = {
    name: 'ООО Агро',

    employees: [
        {
            name: 'Света',
            getName: function () {
                return this.name;
            },
        },
        {
            name: 'Женя',
            getName: function () {
                return this.name;
            },
        },
        {
            name: 'Леша',
            getName: function () {
                return this.name;
            },
        },
    ],
    ceo: {
        name: 'Вася',

        getName: function () {
            return this.name;
        },
    },

    getName: function () {
        return this.name;
    },
};

console.log(company.employees.map(employee => employee.getName()));

console.log(company.getName());

console.log(company.ceo.getName());
