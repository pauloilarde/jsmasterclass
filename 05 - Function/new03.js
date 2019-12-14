const personProtype = {
    getAge() {
        return (new Date()).getFullYear() - this.year;
    }
};
const createPerson = function (name, city, year) {
    const person = {
        name,
        city,
        year,

    };
    Object.setPrototypeOf(person, personProtype)
    return person;
}

const person1 = createPerson("Paulo", "São Paulo", 1990);
const person2 = createPerson("Silvio", "Campinas", 1982);

console.log(person1);
console.log(person1.getAge());

console.log(person2);
console.log(person2.getAge());