const rectangle = {
    set x(x) {
        if (x > 0) {
            this._x = x;
        } else {
            console.log("Invalid value for 'x'");
        }
    },
    set y(y) {
        if (y > 0) {
            this._y = y;
        } else {
            console.log("Invalid value for 'y'");
        }
    },
    get area() {
        return this._x * this._y;
    }
};

rectangle.x = -5;
rectangle.y = -7;

console.log(rectangle.area)