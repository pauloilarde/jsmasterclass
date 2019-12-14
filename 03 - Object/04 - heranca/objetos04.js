const functionalLanguage = {
    paradigm: "Functional"
};

const scheme = {
    name: "Scheme",
    year: 1975,
};

Object.setPrototypeOf(scheme, functionalLanguage);

const javascript = {
    name: "JavaScript",
    year: 1995,
};

Object.setPrototypeOf(javascript, functionalLanguage);

console.log(javascript)
console.log(javascript.paradigm);
console.log(scheme)
console.log(scheme.paradigm);


for (let key in javascript) {
    console.log(key, javascript.hasOwnProperty(key))
}