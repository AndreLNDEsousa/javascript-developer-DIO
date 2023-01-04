
function escrevaMeuNome(name) {
    return'Meu nome é...' + name;
}

escrevaMeuNome('ANDRE');

function verificaridade(idade) {
    if (idade >= 18) {
        console.log ( escrevaMeuNome(' ANDRE ') + ' MAIOR DE IDADE');
    } else {
        console.log ('MENOR DE IDADE');
    }
}

verificaridade(19);