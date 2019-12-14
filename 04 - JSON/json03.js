const book1 = {
    title: "Refactoring",
    author: "Martin Fowler"
};

const book2 = {
    title: "Refactoring",
    author: "Martin Fowler"
};

const book3 = JSON.parse(JSON.stringify(book2));

console.log(book3);
