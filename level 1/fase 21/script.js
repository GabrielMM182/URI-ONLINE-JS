let N = 800;

let Ano = 365;
let Mes = 30;
let Dias = 1;

let V1 = parseInt(N / Ano);
console.log(`${V1} Ano(s)`);
N = N % Ano;

let V2 = parseInt(N / Mes);
console.log(`${V2} Mes(s)`);
N = N % Mes;

let V3 = parseInt(N / Dias);
console.log( `${V3} Dias(s)`);
N = N % Dias;

