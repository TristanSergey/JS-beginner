const users = [
    {
        name: 'Вася',
        surname: 'Пупкин',
        age: 35,
        skills: ['Разработка', 'css', 'html'],
    },
    {
        name: 'Маша',
        surname: 'Иванова',
        age: 28,
        skills: ['Разработка', 'c++', 'delphi', 'java'],
    },
    {
        name: 'Саша',
        surname: 'Сидоров',
        age: 25,
        skills: ['Разработка', 'python', 'go', 'java', 'js'],
    },
    {
        name: 'Антон',
        surname: 'Сидоров',
        age: 25,
        skills: [
            'Разработка',
            'pascal',
            'go',
            'java',
            'js',
            'css',
            'html',
            'js',
        ],
    },
    {
        name: 'Антон',
        surname: 'Сидоров',
        age: 25,
        skills: ['Разработка', 'css'],
    },
];

const newUsers = users.map(user => {
    return {
        fullName: user.name + ' ' + user.surname,
        skillNum: user.skills.length,
    };
});

console.log(newUsers);
