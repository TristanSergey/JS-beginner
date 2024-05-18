const cities = {
    msk: {
        temp: 25,
        humidity: 50,
        pressure: 762,
        speedOfWind: 10,
    },
    spb: {
        temp: 20,
        humidity: 60,
        pressure: 750,
        speedOfWind: 15,
    },
    lhr: {
        temp: 15,
        humidity: 70,
        pressure: 730,
        speedOfWind: 20,
    },
    syd: {
        humidity: 30,
        pressure: 900,
        speedOfWind: 5,
    },
    rnd: {
        temp: 30,
        humidity: 40,
        pressure: 950,
        speedOfWind: 15,
    },
};
console.log(cities);

let sumTemp = 0;
console.log();
let quantity = Object.keys(cities).length;

for (const key in cities) {
    //console.log(cities[key].temp);
    if (cities[key].temp) {
        sumTemp += cities[key].temp;
    }
}

const avgTemp = sumTemp / quantity;
console.log(avgTemp);
