import { PI, pow } from "./math";

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