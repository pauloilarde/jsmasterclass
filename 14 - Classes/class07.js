class Square {
    constructor(side) {
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }

    toString() {
        return `side: ${this.side}`;
    }
}

let square = new Square(4); // lembrar que o objeto square começa o nome com letra maiúscula

console.log(square.toString()); // agora estou executando o método toString
console.log(square.calculateArea());