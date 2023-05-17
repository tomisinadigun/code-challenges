
const carList = [];

class Car {
    constructor(brand) {
        this.carName = brand;
    }
}

class Cars extends Car {
    constructor(brand, year) {
        super(brand);
        this.carYear = year;
    }

    show () {
        console.log(`I have a ${this.brand} ${this.carYear} car`)
    }
}

myCar = new Cars("Ford", "2013");

console.log(myCar);