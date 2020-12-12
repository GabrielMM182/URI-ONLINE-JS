let n1 = 2.0;
let n2 = 4.0;
let n3 = 7.5;
let n4 = 8.0;

let x1 = 2;
let x2 = 3;
let x3 = 4;
let x4 = 1;

let media = ((n1 * x1) + (n2 * x2) + (n3 * x3) + (n4 *x4)) / 10;
console.log(`Media: ${media}`)

if(media >= 7) {
    console.log('Aluno aprovado')
} else if ( media >= 5 && media <= 6.9) {
    let final = 6.4;
    console.log(`Nota do Exame Final ${final}`);
    if(final > 6) {
        console.log('aluno aprovado');
    } else {
        console.log('Nota insuficiente Reprovado');
    }
}else {
    console.log('nota baixa suficiente para entrar no exame final, Reprovado');
}


