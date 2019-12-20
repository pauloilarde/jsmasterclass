function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.calculateArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
}

let circle1 = new Circle(10);
console.log(circle1.calculateArea());