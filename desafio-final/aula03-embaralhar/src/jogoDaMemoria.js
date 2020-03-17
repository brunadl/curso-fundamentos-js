class JogoDaMemoria {
    constructor({ tela }) {
        // se mandar um obj = { tela:1, idade:2, etc:3}
        // vai ignorar o resto das propriedades e pegar somente a propriedade
        // tela 
        this.tela = tela
        // caminho do arquivo, sempre relativo
        // ao index.html
        this.heroisIniciais = [
            { img: './arquivos/batman.png', name: 'batman'},
            { img: './arquivos/frank.png', name: 'frank'},
            { img: './arquivos/groot.png', name: 'groot'},
            { img: './arquivos/WonderWoman.png', name: 'wonderwoman'},
        ]
    }
    
    // para usar o this, não podemos usar o static
    inicializar() {
       // vai pegar todas as funcoes da classe da tela
       // coloca todos os herois na tela
       this.tela.atualizarImagens(this.heroisIniciais)
       // força a tela a usar o THIS de jogo da memoria
       this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }

    embaralhar() {
        const copias = this.heroisIniciais
        // duplicar os itens 
        .concat(this.heroisIniciais)
        // entrar em cada item e criar um id aleatório
        .map(item => {
          return Object.assign({}, item, { id: Math.random() / 0.5})
        })
        // ordenar
        .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
    }

    jogar() {
        this.embaralhar()
    }
}
