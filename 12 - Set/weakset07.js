let circles = new WeakSet();

function Circle(radius) {
    circles.add(this);
    this.radius = radius;
}

Circle.prototype.calculateArea = function () {
    if (!circles.has(this)) throw 'Invalid object';
    return Math.PI * Math.pow(this.radius, 2);
}

let circle1 = new Circle(10);

let circle2 = {
    radius: 5
}
//console.log(circle1.calculateArea());

console.log(circles.has(circle1));
console.log(circle1.calculateArea.call(circle2)); // lança o erro
