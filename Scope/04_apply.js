'use strict';

const audi = {
    make: 'Audi',
    model: 'A3',
    year: 2021,
    damage: [],
    addDamage(part, rate) {
        console.log(
            ` У авто ${this.make} ${this.model} ${this.year} добавлено: - повреждение ${part} со степенью ${rate}`,
        );
        this.damage.push({
            part,
            rate,
        });
    },
};

//audi.addDamage('Капот', 1);

const bmv = {
    make: 'BMV',
    model: 'X%',
    year: 2022,
    damage: [],
};

//bmv.addDamage = audi.addDamage;
//bmv.addDamage('Крыло', 2);

const addDamageFunc = audi.addDamage;

addDamageFunc.call(bmv, 'Крыло', 3);
addDamageFunc.call(audi, 'Капот ', 2);

addDamageFunc.apply(audi, ['Крыша ', 4]);
addDamageFunc.apply(bmv, ['Замок', 1]);
