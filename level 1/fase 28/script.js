let x = 4.5;
let y = -2.2;

if (x > 0 && y > 0) {
    console.log('Q1');
} else if(x > 0 && y < 0) {
    console.log('Q4');
} else if(x < 0 && y > 0) {
    console.log('Q2');
} else if(x < 0 && y < 0) {
    console.log('Q3');
}else {
    console.log('Origem');
}