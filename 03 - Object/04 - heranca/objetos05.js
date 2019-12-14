const functionalLanguage = {
    paradigm: "Functional"
};

const scheme = Object.create(functionalLanguage);
scheme.name = "Scheme";
scheme.year = 1975;



const javascript = Object.create(functionalLanguage);
javascript.name = "JavaScript";
javascript.year = 1995;


console.log(javascript)
console.log(javascript.paradigm);
console.log(scheme)
console.log(scheme.paradigm);


for (let key in javascript) {
    console.log(key, javascript.hasOwnProperty(key))
}