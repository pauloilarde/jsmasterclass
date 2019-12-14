// o código abaixo tem erro 
// vou fazer outro código para funcionar
const _new = function (fn, ...params) {
    const obj = {};
    fn.call(obj);
    return obj;
};

const Person = function (name, city, year) {
    this.name = name;
    this.city = city;
    this.year = year;
};

Person.prototype.getAge = function () {
    return (new Date()).getFullYear() - this.year;
}

const person1 = _new(Person, "Paulo", "São Paulo", 1990);
const person2 = _new(Person, "Silvio", "Campinas", 1982);
console.log(person1);
console.log(person1.getAge());

console.log(person2);
console.log(person2.getAge());