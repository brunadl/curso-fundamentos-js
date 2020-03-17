const readline = require ('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, msg => {
            !!msg ? resolve(msg) : reject(new Error('O campo não pode estar vazio!'))
        })
    })
}

async function main () {
    try {
        const nome = await questionAsync('Qual seu nome?')
        const telefone = await questionAsync('Qual seu telefone?')
        console.log(`Nome: ${nome}\nTelefone: ${telefone}`);
        
    } catch (error) {
            console.log('Deu ruim!!!', error.stack);
        }
        finally {
            terminal.close()
        }
    }

main()