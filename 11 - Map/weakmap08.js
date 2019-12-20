let rectangle1 = {
    x: 10,
    y: 3
};
let rectangle2 = {
    x: 8,
    y: 4
};

function calculateArea(rectangle) {
    let area = rectangle.x * rectangle.y;
    return area;
}

console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle2));