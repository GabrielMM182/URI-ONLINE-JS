var X1 = -2.5;
var X2 = 12.1;

var Y1 = 0.4;
var Y2 = 7.3;

var resultado = (X2 - X1); 
var resultado2 = (Y2 - Y1);

var a = Math.pow(resultado , 2); 
var b = Math.pow(resultado2, 2);

var final = a + b;

var distancia = Math.sqrt(final); // raiz quadrada de um valor

console.log(distancia.toFixed(4));