var x = 5;

const objA = {
    x: 10,
    getX1: (x) => { return this.x },
    getX2: function (x) { return this.x }
};

const objB = {
    x: 20,
    getX1: objA.getX1,
    getX2: objA.getX2
};


console.log(objA.getX1(30))
console.log(objA.getX2(30))
console.log(objB.getX1(30))
console.log(objB.getX2(30))