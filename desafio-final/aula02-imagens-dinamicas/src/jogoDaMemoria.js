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
    }
}
