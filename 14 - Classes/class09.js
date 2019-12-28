function Square(side) {
    this.side = side;
}

Square.prototype.calculateArea = function (area) {
    return Math.pow(this.side, 2);
}

Square.prototype.toString = function () {
    return `side: ${this.side} area: ${this.calculateArea()}`;
};

Square.fromArea = function (area) {
    return new Square(Math.sqrt(area));
};

let square = Square.fromArea(16);

console.log(square.toString()); // agora estou executando o método toString
console.log(square.calculateArea());