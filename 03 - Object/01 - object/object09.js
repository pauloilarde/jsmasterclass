const book = {
    title: "Clean Code",
    author: "Robert C Martin",
    pages: 464,
    language: "English",
    available: true
}

console.log("Exibe as chaves:");

for (let key in book) {
    console.log(key)
}

console.log("Exibe os valores:");
for (let value in book) {
    console.log(book[value])
}