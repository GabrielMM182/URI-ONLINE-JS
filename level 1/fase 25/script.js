let x = 25.00;

if(x >= 0 && x  <= 25.00) {
    console.log('INTERVALO [0 --- 25]');
} else if(x >=  25.01 && x <= 50.00) {
    console.log('INTERVALO [25 ---- 50]');
} else if(x >= 50.01 && x <= 75.00) {
    console.log('INTERVALO [50 --- 75]');
} else if(x >= 75.01 && x <= 100.00) {
    console.log('INTERVALO [75 ----- 100]');
} else {
    console.log('FORA DO INTERVALO');
}