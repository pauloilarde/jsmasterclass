const person1 = {
    name: 'Paulo',
    city: 'São Paulo',
    year: 1990,
    getAge() {
        return (new Date()).getFullYear() - this.year;
    }
};

const person2 = {
    name: 'Luke',
    city: 'Salvador',
    year: 1993,
    getAge() {
        return (new Date()).getFullYear() - this.year;
    }
};


console.log(person1)
console.log(person1.getAge());

console.log(person2)
console.log(person2.getAge());
