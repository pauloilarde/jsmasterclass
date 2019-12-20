let arr1 = [10, 10, 10];
let arrSet = [];

arr1.forEach(function (element) {
    if (arrSet.includes(element)) return;

    arrSet.push(element);
});

console.log(arrSet);