// var valor = 576; primeira tentativa falha

// var x1 = 100;
// var x2 = 50;
// var x3 = 20;
// var x4 = 10;
// var x5 = 5;
// var x6 = 2;
// var x7 = 1;

// for (var a = 0; a > valor; a++) {
//     if (  valor % x1) {
//         if (  valor % x2) {
//             if (  valor % x3) {
//                 if (  valor % x4) {
//                     if (  valor % x5) {
//                         if (  valor % x6) {
//                             if (  valor % x7) {

//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// var n1 = valor;

// console.log(valor)

// // vai trabalhar o resto de uma divisão sendo 576 / 100 => 76 / 50 => 26.....


let valor = 576;
let  X1 = 100;
let  X2 = 50;
let  X3 = 20;
let  X4 = 10;
let  X5 = 5;
let  X6 = 2;
let  X7 = 1;

console.log(valor);


// NOTAS DE 100
let qtd = parseInt(valor / X1); //parseInt vai colocar o valor como inteiro 
console.log(`${qtd} nota(s) de R$ ${X1},00`); // lembrar de que pode escrever com `${para mostrar um valor fica melhor}`
valor = valor % X1; // pega o resto da divisão com o % 

console.log(valor);


// NOTAS DE 50
let qtd2 = parseInt(valor / X2);
console.log(`${qtd2} nota(s) de R$ ${X2},00`);
valor = valor % X2;

console.log(valor);


// NOTAS DE 20
let qtd3 = parseInt(valor / X3);
console.log(`${qtd3} nota(s) de R$ ${X3},00`);
valor = valor % X3;

console.log(valor);


// NOTAS DE 10
let qtd4 = parseInt(valor / X2);
console.log(`${qtd4} nota(s) de R$ ${X4},00`);
valor = valor % X4;

console.log(valor);


// NOTAS DE 5
let qtd5 = parseInt(valor / X5);
console.log(`${qtd5} nota(s) de R$ ${X5},00`);
valor = valor % X5;

console.log(valor);


// NOTAS DE 2
let qtd6 = parseInt(valor / X6);
console.log(`${qtd6} nota(s) de R$ ${X6},00`);
valor = valor % X6;

console.log(valor);


// NOTAS DE 1
let qtd7 = parseInt(valor / X7);
console.log(`${qtd7} nota(s) de R$ ${X7},00`);
valor = valor % X7;

console.log(valor);


