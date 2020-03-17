// Definindo Variáveis
let salarioDoAmigo = 1000
let meuSalario = "2999.14"
let meuSalarioCorrigido = Number(meuSalario)

// Soma dos Salários
console.log(salarioDoAmigo + meuSalarioCorrigido)

// Analisando o tipo de Texto
console.log(
    typeof(salarioDoAmigo), 
    salarioDoAmigo
);
console.log(
    typeof(meuSalario),
    meuSalario
);

// Verificando se é um número válido
console.log(
    isNaN(meuSalario)
);

// Concatenando e printando numa mesma linha
let minhaString = 'Olá, mundo!'
let minhaOutraString = 'Olá, mundo 2!'
let minhaStringComVariaveis =
 `${minhaString} - ${minhaOutraString}. AE!`

 console.log(
    minhaStringComVariaveis
 );
 