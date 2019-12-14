const calculateArea = function () {
    return this.x * this.y;
}
const rectangle = {
    x: 4,
    y: 3,
    calculateArea
};

console.log(rectangle.calculateArea());
