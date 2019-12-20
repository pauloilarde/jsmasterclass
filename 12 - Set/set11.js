let arr1 = [10, 10, 10];
console.log(arr1);

let obj1 = {};

arr1.forEach(function (element) {
    obj1[element] = undefined;
});

arr1 = Object.keys(obj1);
console.log(arr1);