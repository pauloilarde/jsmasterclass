const Person = function (name, city, year) {
    this.name = name;
    this.city = city;
    this.year = year;
};

Person.prototype.getAge = function () {
    return (new Date()).getFullYear() - this.year;
}
const person1 = new Person("Paulo", "São Paulo", 1990);
const person2 = new Person("Silvio", "Campinas", 1982);

console.log(person1);
console.log(person1.getAge());

console.log(person2);
console.log(person2.getAge());