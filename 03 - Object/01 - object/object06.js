const book1 = {};

book1.title = "Clean Code";
book1.author = "Robert C Martin";
book1.pages = 464;
book1.language = "English";
book1.available = true;

console.log(book1);

const book2 = new Object();

book2.title = "Clean Code 2";
book2.author = "Robert C Martin";
book2.pages = 464;
book2.language = "English";
book2.available = true;

console.log(book2);

const book3 = Object.create(null);

book3.title = "Clean Code 3";
book3.author = "Robert C Martin";
book3.pages = 464;
book3.language = "English";
book3.available = true;

console.log(book3);