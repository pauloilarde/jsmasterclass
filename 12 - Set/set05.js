// esse código faz a mesma coisa que o set04, a diferença é que aqui eu usei arrow function
let charsets = new Set();

charsets.add('UTF-8');
charsets.add('ISO-8859-1');
charsets.add('ASCII');
console.log(charsets);

charsets.forEach(charset => console.log(charset));