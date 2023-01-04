//EXEMPLO DE LISTAS BASICO
// const alunos = ['ANDRE', 'MARCELO', ' SANDRA'];
// alunos[2] = 'BRITNEY';
// alunos.push('DRIKA');

// console.log(alunos);

/********************************************/

const notas = []; 
notas.push(2);
notas.push(6);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(5);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
}
const media = soma / notas.length;
// console.log(media.toFixed(1));

if (media  <= 5)  {
    console.log(media.toFixed(1));
    console.log('Recuperação');

} else {
    console.log(media.toFixed(1));
    console.log('excelente APROVADO!!!!');
}

// console.log(soma / 5);