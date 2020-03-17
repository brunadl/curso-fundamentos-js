const heroi = {
    nome: 'Flash', 
    idade: 100, 
    sexo: 'Masculino'
}

        // - ATALHO PARA COMENTAR TUDO DE UMA VEZ - CTRL + PONTO E VIRGULA
// console.log('Nome:', heroi.nome);
// console.log('Idade:', heroi['idade']);
// console.log('sexo:', heroi.sexo);
// console.log('naoExiste', heroi.naoExiste);
// heroi.id = 0001
// console.log(heroi);

// saber chaves
console.log(Object.keys(heroi));

// saber valores
console.log(Object.values(heroi));

// juntar dois objetos
const pessoa = {
    tamanho: '10 metros'
}
    //junta os dois objetos
const novoObj = Object.assign(heroi, pessoa)
delete novoObj.nome
console.log(novoObj);









