let languages = ['Fortran', 'Cobol', 'Pascal'];

for (let i in languages) {
    console.log(i); // imprime os índices: 0, 1 e 2
}

for (const i in languages) {
    console.log(languages[i]); // imprime as linguagens
}