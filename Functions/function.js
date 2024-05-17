// const powerTo = (num, power) => {
//     return num ** power;
// };

// console.log(powerTo(3, 4));
function powerTo(num, power) {
    return num ** (power ?? 2);
}

console.log(powerTo(25));

const canAccessWebSite = age => (age >= 18 ? 'Да' : 'Нет');
