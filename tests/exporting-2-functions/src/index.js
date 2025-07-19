const readline = require("readline");
const matematica = require("./modulos/matematica")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para transformar rl.question em uma Promise
function obterNumero(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta + ": ", (resposta) => {
            resolve(resposta);
        });
    });
}

// Função principal async para usar await
async function main() {
    const numero1 = await obterNumero("Por favor, digite o primeiro número");
    const numero2 = await obterNumero("Por favor, digite o segundo número");

    console.log("A soma destes números é: " + matematica.soma(numero1, numero2));
    console.log("O primeiro número subtraído do segundo é: " + matematica.subtracao(numero1, numero2));

    rl.close();
}

main();
