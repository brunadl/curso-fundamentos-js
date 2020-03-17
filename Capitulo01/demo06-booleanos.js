const podeDirigir = true
if (podeDirigir) {
    console.log('Ela pode dirigir <3');
}

const saldoEmConta = 0
if(!saldoEmConta) {
    console.log('Não tem saldo :(');
    
}

// força o valor true or false
// de acordo com a tabela
const boolComString = 'ae hackerzona!!'
console.log('boolComString', !!boolComString);

// nergação
console.log('negação', !boolComString);

// negação _ forçar o bool
console.log (
    'negação + forçar bool',
    ! (!!boolComString)
);

