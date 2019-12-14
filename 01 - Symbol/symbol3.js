let regExp = /JavaScript/;
regExp[Symbol.match] = false;
console.log("/JavaScript/".startsWith(regExp));
