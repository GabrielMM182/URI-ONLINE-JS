// let N = 140153;
// let S = 6;
// let M = 60;
// let H = 600;

// // let [S, M , H] = 60;

// let tempoH = parseInt(N / H);
// console.log(`quantidade de HORAS: ${tempoH}`);
// N = N % H;

// let tempoM = parseInt(N / M);
// console.log(`quantidade de MINUTOS: ${tempoM}`);
// N = N % M;

// let tempoS = parseInt(N / S);
// console.log(`quantidade de SEGUNDOS: ${tempoS}`);
// N = N % S;

// transformar horas em segundos / minutos em segundos E DEIXAR SEGUNDOS EM 1!!! (erro estava sendo deixar 1 como resto de minutos)

let N = 140153;
let Horas = 3600;
let Minutos = 60;
let segundos = 1;

let tempo1 = parseInt(N / Horas);
console.log(`quantidade de HORAS: ${tempo1}`);
N = N % Horas;

let tempo2 = parseInt(N / Minutos);
console.log(`quantidade de Minutos: ${tempo2}`);
N = N % Minutos;

let tempo3 = parseInt(N / segundos);
console.log(`quantidade de Segundos: ${tempo3}`);
N = N % segundos;


