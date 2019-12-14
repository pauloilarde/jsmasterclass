const book1 = {
    title: "Clean Code",
    author: "Robert C Martin",
    pages: 464,
    language: "English",
    available: true
}

const book2 = {};

for (key in book1) {
    book2[key] = book1[key];
}

let isEqual = (book1 == book2)

console.log(book2);
console.log(isEqual);

