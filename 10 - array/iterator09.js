const frameworks = [
    {
        name: 'jQuery',
        users: 1204527
    },
    {
        name: 'Angular.js',
        users: 745762
    },
    {
        name: 'React.js',
        users: 658355
    },
    {
        name: 'Ember.js',
        users: 125621
    }
];

let result = frameworks.map(f => f.name);

console.log(result);
