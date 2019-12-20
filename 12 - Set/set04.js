let charsets = new Set();

charsets.add('UTF-8');
charsets.add('ISO-8859-1');
charsets.add('ASCII');
console.log(charsets);

charsets.forEach(function (charset) {
    console.log(charset);
});