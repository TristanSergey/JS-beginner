function changeBalance() {
    let balance = 0;
    return function (sum) {
        balance += sum;
        console.log(`Баланс: ${balance}`);
    };
}

changeBalance(400);
const change = changeBalance();
change(100);
change(-50);
change(200);
console.dir(change);

const change2 = changeBalance();
change2(100);
console.dir(change2);

const userInfo = {
    balance: 0,
    operations: 0,
    increase(sum) {
        this.balance += sum;
        this.operations++;
    },
};

function user() {
    const newUser = {
        balance: 0,
        operations: 0,
        increase(sum) {
            this.balance += sum;
            this.operations++;
        },
    };
    return function () {
        return newUser;
    };
}

const user1 = user();
user1().increase(100);
user1().increase(200);
user1().increase(-100);

console.log(user1());
