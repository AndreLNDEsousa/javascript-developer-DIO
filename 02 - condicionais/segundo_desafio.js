/* Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você tera 3 variáveis, sendo elas:
1 - Preço do etanol
2 - Preço da gasolina
3 - O tipo de combustível que  está no seu carro
4 - Valor médio de combustível do carro por km
5 - Distancia em KM da viagem
Imprima no  console o valor que será
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoDeCombustivel = 'Gasolina';
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoDeCombustivel === 'Etanol') {

    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;

    console.log(valorGasto.toFixed(2));
}


