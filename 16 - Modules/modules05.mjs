import { PI as pi, pow } from "./math"; // estou usando alias aqui

class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return pi * pow(this.radius, 2); // precisa usar o alias aqui tbm 
    }
}

let circle = new Circle(10);

console.log(circle);
console.log(circle.area);