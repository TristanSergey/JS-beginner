const now = new Date();
console.log(now);
console.log(new Date('02-01-2022'));
console.log(new Date('02/01/2022'));

console.log(new Date(2024, 10, 20));

const date1 = new Date(2024, 9, 15);
const date2 = new Date(2024, 11, 15);
console.log(Number(date1));
console.log(Number(date2));
console.log((date2 - date1) / (24 * 60 * 60 * 1000));

function getDaysBetween(date1, date2) {
    return (date2 - date1) / (24 * 60 * 60 * 1000);
}
console.log(getDaysBetween(date1, date2));

const first = new Date('03-01-2022');
const second = new Date('03-01-2022');

console.log(first < second);
console.log(first > second);
console.log(first === second);
console.log(first == second);

console.log(first.getTime() === second.getTime());
console.log(first.getTime() == second.getTime());
console.log(Number(first) === Number(second));

const user = {
    name: 'John',
    birthday: '06 -02-2024',
};

console.log(new Date(user.birthday).getDate());
console.log(new Date(user.birthday).getMonth());
console.log(new Date(user.birthday).getFullYear());
console.log(new Date().getDate());
console.log(new Date().getMonth());

function isDayBirthday(date) {
    return (
        new Date().getDate() === new Date(user.birthday).getDate() &&
        new Date().getMonth() === new Date(user.birthday).getMonth()
    );
}

console.log(isDayBirthday(user.birthday));

const date = new Date();
console.log(date);
console.log(new Intl.DateTimeFormat('ru-RU').format(date));

const options_1 = {
    hour: 'numeric',
    minute: 'numeric',
};

console.log(new Intl.DateTimeFormat('ru-RU', options_1).format(date));

const options_2 = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    weekday: 'short',
    year: '2-digit',
};

console.log(new Intl.DateTimeFormat('ru-RU', options_2).format(date));

console.log(new Intl.DateTimeFormat('en-US', options_2).format(date));

// console.log(navigator.language);
