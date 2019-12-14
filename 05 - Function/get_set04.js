const rectangle = {
    set x(x) {
        this._x = x;
    },
    set y(y) {
        this._y = y;
    },
    get area() {
        return this._x * this._y;
    }
};

rectangle.x = 5;
rectangle.y = 7;

console.log(rectangle.area)