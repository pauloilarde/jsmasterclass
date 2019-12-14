const createPerson = function (name, city, year) {
    return {
        name,
        city,
        year,
        getAge() {
            return (new Date()).getFullYear() - this.year;
        }
    };
}

const person1 = createPerson("Paulo", "Sâo Paulo", 1990);
const person2 = createPerson("Silvio", "Campinas", 1982);

console.log(person1);
console.log(person1.getAge());

console.log(person2);
console.log(person2.getAge());