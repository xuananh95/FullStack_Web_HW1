// Constructor Function
function Car(_make, _speed) {
    this.make = _make;
    this.speed = _speed;
}

// Adding new method accelerate
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`Car ${this.make} speed: ${this.speed}`);
};

// Adding new method brake
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`Car ${this.make} speed: ${this.speed}`);
};

// Initializing new objects
const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

// Testing methods
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();

mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
