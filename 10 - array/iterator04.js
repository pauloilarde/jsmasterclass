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

console.log(frameworks.filter(f => f.name === 'React'));
