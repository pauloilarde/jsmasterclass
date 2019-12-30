const PI = 3.14159265359;

function pow(base, exponential) {
    if (exponential === 0) return 1;
    return base * pow(base, exponential - 1);
}

class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return PI * pow(this.radius, 2);
    }
}

let circle = new Circle(10);

console.log(circle);
console.log(circle.area);