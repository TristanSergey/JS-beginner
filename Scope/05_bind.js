const audi = {
    make: 'Audi',
    model: 'A3',
    year: 2021,
    damage: [],
};

const carManipulation = {
    addDamage(part, rate) {
        this.damage.push({ part, rate });
        console.log(`Добавить повреждения на ${this.make} ${this.model}`);
    },
};

const addDamageAudi = carManipulation.addDamage.bind(audi);
//carManipulation.addDamage(audi, 10);
addDamageAudi('Крыша', 10);
const addDamageRoof = carManipulation.addDamage.bind(audi, 'Крыша');
addDamageRoof(5);
addDamageRoof(11);
console.log(audi);

function removePassword(reset) {
    if (reset) {
        this.password = undefined;
    } else {
        this.password = '1';
    }
}

const user = {
    name: 'Ivan',
    login: 'ivan1975',
    password: '1',
};

const resetPassword = removePassword.bind(user, true);
resetPassword();

console.log(user);
