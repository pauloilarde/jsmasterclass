const books = [
    {
        name: 'Cronicas de Narnia',
        author: 'C.S. Lewis',
        year: 1950
    },
    {
        name: 'O Hobbit',
        author: 'R.R. Tolkien',
        year: 1937
    },
    {
        name: 'Guerra dos Tronos',
        author: 'R.R. Martin',
        year: 1995
    },
    {
        name: 'Sherlock Holmes',
        author: 'E. Alan Poe',
        year: 1897
    },
];

books.sort(function (a, b) {
    return a.name.localeCompare(b.name);
})

console.log(books);