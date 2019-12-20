let charsets = new Set();

charsets.add('UTF-8');
charsets.add('ISO-8859-1');
charsets.add('ASCII');
console.log(charsets);
console.log(charsets.has('ASCII')); // true
console.log(charsets.has('CP-1252')); // false