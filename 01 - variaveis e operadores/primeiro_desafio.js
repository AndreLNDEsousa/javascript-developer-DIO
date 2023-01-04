/* Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você tera 3 variáveis, sendo elas:
1 - Preço do combustível
2 - Valor médio de combustível do carro por km
3 - Distancia em KM da viagem
Imprima no  console o valor que será
*/

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;


console.log(valorGasto.toFixed(2));