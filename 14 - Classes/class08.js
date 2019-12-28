class Square {
    constructor(side) {
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side} area: ${this.calculateArea()}`;
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area));
    }
}

let square = Square.fromArea(16);

console.log(square.toString()); // agora estou executando o método toString
console.log(square);