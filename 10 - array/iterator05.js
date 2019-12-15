const frameworks = [
    {
        name: 'jQuery',
        users: 1204527
    },
    {
        name: 'Angular',
        users: 745762
    },
    {
        name: 'React',
        users: 658355
    },
    {
        name: 'Ember',
        users: 125621
    }
];

let result = frameworks.filter(f => f.name === 'React');

// exibe o resultado fora do array
console.log(result[0]);
// exibe o resultado dentro de um array
console.log(result);
