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

let result = frameworks.find(f => f.name === 'React');

console.log(result);
