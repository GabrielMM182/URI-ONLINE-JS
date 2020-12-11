let V = 576.73;

let N1 = 100;
let N2 = 50;
let N3 = 20;
let N4 = 10;
let N5 = 5;
let N6 = 2;

let M1 = 1;
let M2 = 0.5;
let M3= 0.25;
let M4 = 0.10;
let M5 = 0.05;
let M6 = 0.01;

// nota
let X1 = parseInt( V / N1);
console.log('NOTAS:')
console.log(`${X1.toFixed(0)} nota(s) de  R$100.00`);
V = V % N1;

let X2 = parseInt( V / N2);
console.log(`${X2.toFixed(0)} nota(s) de  R$50.00`);
V = V % N2;

let X3 = parseInt( V / N3);
console.log(`${X3.toFixed(0)} nota(s) de  R$20.00`);
V = V % N3;

let X4 = parseInt( V / N4);
console.log(`${X4.toFixed(0)} nota(s) de  R$10.00`);
V = V % N4;

let X5 = parseInt( V / N5);
console.log(`${X5.toFixed(0)} nota(s) de  R$5.00`);
V = V % N5;

let X6 = parseInt( V / N6);
console.log(`${X6.toFixed(0)} nota(s) de  R$2.00`);
V = V % N6;


// moeda
let Y1 = parseInt( V / M1);
console.log('MOEDAS:')
console.log(`${Y1.toFixed(0)} moeda(s) de  R$1.00`);
V = V % M1;

let Y2 = parseInt( V / M2);
console.log(`${Y1.toFixed(0)} moeda(s) de  R$0.50`);
V = V % M2;

let Y3 = parseInt( V / M3);
console.log(`${Y3.toFixed(0)} moeda(s) de  R$0.25`);
V = V % M3;

let Y4 = parseInt( V / M4);
console.log(`${Y4.toFixed(0)} moeda(s) de  R$0.10`);
V = V % M4;

let Y5 = parseInt( V / M5);
console.log(`${Y5.toFixed(0)} moeda(s) de  R$0.05`);
V = V % M5;


let Y6 = parseInt( V / M6);
console.log(`${Y6.toFixed(0)} moeda(s) de  R$0.01`);
V = V % N6;

