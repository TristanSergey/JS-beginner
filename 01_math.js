console.log(10 === 10.0); // true

console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);
console.log('-----------------');
console.log(Number('10'));
console.log(+'20');
console.log('-----------------');
// можно использовать просто parseInt без Number
console.log(parseInt('11', 10));
console.log(parseInt('11 sec', 10));
console.log(parseInt('sec 11', 10));
console.log('-----------------');
// но для наглядности лучше использовать Number
console.log(Number.parseInt('11', 10));
console.log(Number.parseInt('11 sec', 10));
console.log(Number.parseInt('sec 11', 10));
console.log('-----------------');
console.log(Number.parseInt('11.5', 10));
console.log('-----------------');
console.log(Number.parseFloat('11.5', 10));
console.log(Number.parseFloat('11.5sec', 10));
console.log(Number.parseFloat('sec 11.5', 10));
console.log('-----------------');
console.log(Number.isNaN(Number('10sdfs')));
console.log(Number.isNaN(10 / 0));
console.log('-----------------');
console.log(Number.isFinite(10 / 0));
console.log(Number.isFinite(Number('10sdfs')));
console.log(Number.isFinite(10));

console.log(''); //Проверяет целое число или нет
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

console.log(''); // до ближайшего целого
console.log(Math.round(1.4));
console.log(Math.round(1.6));
console.log(Math.round(1.49999));

console.log(''); //до ближайшего большего целого
console.log(Math.ceil(1.1));
console.log(Math.ceil(1));
console.log(Math.ceil(0.1));

console.log(''); //до ближайшего меньшего целого
console.log(Math.floor(1.9));
console.log(Math.floor(1));
console.log(Math.floor(0.1));

console.log(''); //обрезает до целого
console.log(Math.trunc(2.9));
console.log(Math.trunc(2.139));
console.log(Math.trunc(1.9));

console.log(''); //округлить до количества знаков

console.log((1.49999).toFixed(2)); //это строка
console.log((1.49999).toFixed(1)); //это строка
console.log(Number((1.49999).toFixed(1)));

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(1, 20));
const option = {
    style: 'currency',
    currency: 'RUB',
};

const option2 = {
    style: 'currency',
    currency: 'USD',
};

const option3 = {
    style: 'decimal',
};

const option4 = {
    style: 'percent',
};

const option5 = {
    style: 'unit',
    unit: 'celsius',
};

console.log(new Intl.NumberFormat('ru-RU', option2).format(23000));
console.log(new Intl.NumberFormat('en-US', option2).format(23000));
console.log(new Intl.NumberFormat('ru-RU', option3).format(23000));
console.log(new Intl.NumberFormat('ru-RU', option4).format(0.1));
console.log(new Intl.NumberFormat('ru-RU', option5).format(25));

const hash = new Map([
    ['RUB', 90],
    ['EUR', 1.1],
    ['USD', 1.0],
    ['UAN', 3.5],
]);

console.log(hash);

function convert(sum, currency1, currency2) {
    if (hash.has(currency1)) {
        cur1 = hash.get(currency1);
    } else {
        return null;
    }
    if (hash.has(currency2)) {
        cur2 = hash.get(currency2);
    } else {
        return null;
    }
    return sum / (cur1 / cur2);
}

console.log(convert(990, 'RUB', 'USD'));
