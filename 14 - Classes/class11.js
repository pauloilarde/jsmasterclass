class Shape {
    toString() {
        return `area: ${this.calculateArea()}`;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side}  ${super.toString()}`;
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area));
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    toString() {
        return `radius: ${this.radius} ${super.toString()}`;
    }

    static fromArea(area) {
        return new Circle(Math.sqrt(area / Math.PI));
    }
}

let circle = new Circle(10);
console.log(circle.toString());
console.log(circle.calculateArea());
console.log(Circle.fromArea(314.1592653589793));
console.log();

let square = Square.fromArea(16);

console.log(square.toString()); // agora estou executando o método toString
console.log(square);