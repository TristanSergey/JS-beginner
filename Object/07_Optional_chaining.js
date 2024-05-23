const cities = {
    msk: {
        temp: {
            celcius: 25,
        },
    },
    spb: {},
};

const city = 'msk';

if (cities[city] && cities[city].temp) {
    console.log(cities[city].temp.celcius);
}

//optional chaining with objects
console.log(cities[city]?.temp?.celcius);

const warehouse = {
    //   weight: {},
    goods: [],
    findGoodById(id) {
        return this.goods.find(good => good.id === id);
    },
    addGood(good) {
        if (!this.findGoodById(good.id)) {
            this.goods.push(good);
        } else {
            console.log(' Такой товар уже есть');
        }
    },
    getWeightKg() {
        return this.goods.reduce(
            (acc, item) => acc + (item.weight?.kg || 0),
            0,
        );
    },
};

warehouse.addGood({ id: 1, weight: { kg: 1000 }, brand: 'Ford' });

warehouse.addGood({ id: 2, weight: { kg: 2 } });

warehouse.addGood({ id: 3, color: 'red' });
warehouse.addGood({ id: 3, color: 'white' });

console.log(warehouse);

console.log(warehouse.getWeightKg());

console.log(warehouse.findGoodById(1));
