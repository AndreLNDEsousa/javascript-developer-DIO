/*2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.*/

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log('Numeros Pares');
        console.log(numero);
    } /*else {
        console.log('Numeros Impar');
        console.log(numero);
    }*/
}


/*3) Faça um programa que dado uma lista de nomes imprima os nomes que comecem com a letra "V".*/