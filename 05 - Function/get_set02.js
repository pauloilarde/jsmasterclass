const rectangle = {
    x: 5,
    y: 3,
    get area() {
        return this.x * this.y
    }
};

console.log(rectangle.area)