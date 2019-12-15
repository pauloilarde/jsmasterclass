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

// retorna um array com frameworks que tem mais de 700 mil usuários
console.log(frameworks.filter(f => f.users > 700000));
// retorna um array com frameworks que tem menos de 200 mil usuários
console.log(frameworks.filter(f => f.users < 200000));
