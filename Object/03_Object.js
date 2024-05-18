const users = {
    name: 'Иван',
    surname: 'Иванов',
    age: 35,
    getFullNameThis: function () {
        return this.name + ' ' + this.surname;
    },

    getFullName: function (name, surname) {
        return name + ' ' + surname;
    },
};

const lengthFullName = users => users.name.length + users.surname.length;

console.log(lengthFullName(users));

console.log(users.getFullName('Иван', 'Сидоров'));

const wallet = {
    balance: 0,
    operations: [],

    replenishmentOfBalance: function (reason, sum) {
        this.balance += sum;
        this.operations.push({ reason: reason, sum: sum });
        this.numberOfOperations++;
        return true;
    },

    getBalance() {
        return this.balance;
    },

    getNumberOfOperations: function () {
        return this.operations.length;
    },

    makeAnPayment: function (reason, sum) {
        if (this.balance < sum) {
            console.log(' На счету недостаточно средств');
            return false;
        }
        this.numberOfOperations++;
        this.balance -= sum;
        this.operations.push({ reason: reason, sum: -sum });
        return true;
    },
};

wallet.replenishmentOfBalance('Зарплата', 10000);
wallet.replenishmentOfBalance('Проценты', 1000);
wallet.makeAnPayment('Оплата кредита', 5000);
wallet.makeAnPayment('ПК', 5000);
console.log(wallet.getBalance());
wallet.makeAnPayment('Еда', 2000);

console.log(wallet.getBalance());
console.log(wallet.getNumberOfOperations());

console.log(wallet.operations);
