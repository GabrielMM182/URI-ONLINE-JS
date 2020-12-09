let N = 556;
let S = 60;
let M = 60;
let H = 60;

// let [S, M , H] = 60;

let tempoH = parseInt(N / H);
console.log(`quantidade de HORAS: ${tempoH}`);
N = N % H;
console.log(N);

let tempoM = parseInt(N / M);
console.log(`quantidade de MINUTOS: ${tempoM}`);
N = N % M;
console.log(M);

let tempoS = parseInt(N / S);
console.log(`quantidade de SEGUNDOS: ${tempoS}`);
N = N % S;
console.log(S);