//Exercicios
// 1 - Comparar idade.

class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    
}

function compararPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velhor(a) que ${p2.nome}`);
    }
    else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velhor(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const andre = new Pessoa('Andre', 37);
const marcelo = new Pessoa('Marcelo', 47);

compararPessoa(andre, marcelo);



//CLASSES

// class Pessoa {
//     nome;
//     idade;
//     anoDeNascimento;

//     constructor(nome,idade) {
//         this.nome = nome;
//         this.idade = idade;
//         this.anoDeNascimento = 2022 - idade;
//     }

//     descrever() {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
//     }
// }

// const andre = new Pessoa('Andre', 37);
// const renan = new Pessoa('Renan', 25);

// andre.descrever();
// console.log(andre);

// renan.descrever();
// console.log(renan);

// const andre = new Pessoa();
// andre.nome = 'Andre Sousa';
// andre.idade = 37;

// const marcelo = new Pessoa();
// marcelo.nome = 'Marcelo Cardoso';
// marcelo.idade = 47;

// console.log(andre);
// marcelo.descrever();




//OBJETOS E ATRIBUTOS
// const pessoa = {
//     nome : 'Andre Sousa',
//     idade: 37,

//     descrever: function () {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} `);
//     }
// };

// const atributo = 'idade';
// console.log(pessoa[atributo]);

// pessoa.descrever = function () {
//     console.log(`Meu nome é ${this.nome} `);
// }
// pessoa.descrever();

// //adicionar um item na coleção
// andre.altura = 1.69;
// //delete para remover um item da coleção
// delete andre.idade
// //chama itens da coleção
// console.log(andre.nome);
// console.log(andre.idade);
// //chama a coleção inteira
// console.log(andre);