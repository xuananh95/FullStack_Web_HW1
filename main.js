function Car(_make, _speed) {
    this.make = _make;
    this.speed = _speed;
    this.accelerate = function () {
        this.speed += 10;
        console.log(`Car ${this.make} speed: ${this.speed}`);
    };
    this.brake = function () {
        this.speed -= 5;
        console.log(`Car ${this.make} speed: ${this.speed}`);
    };
}

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();

mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
