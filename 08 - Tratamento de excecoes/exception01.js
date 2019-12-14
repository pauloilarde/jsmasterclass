const Rectangle = function (x, y) {
    this.x = x;
    this.y = y;
    this.calculateArea = function () {
        return this.x * this.y;
    }
}

const rectangle = new Rectangle(10, 3);

console.log(rectangle.calculateArea());