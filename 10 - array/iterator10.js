const vendas = [
    {
        valor: 10,
        categoria: 'Débito'
    },
    {
        valor: 20,
        categoria: 'Crédito'
    },
    {
        valor: 30,
        categoria: 'Débito'
    },
    {
        valor: 40,
        categoria: 'Crédito'
    },
    {
        valor: 50,
        categoria: 'Débito'
    },
    {
        valor: 60,
        categoria: 'Crédito'
    },
    {
        valor: 70,
        categoria: 'Débito'
    },
];

let totalDebito = 0;

const debito = vendas.reduce((total, venda) => {

    if (venda.categoria == 'Débito') {
        return total + venda.valor;
    }
}, 0);

console.log(debito)