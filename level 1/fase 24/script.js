let v1 = 10.0;
let v2 = 20.1;
let v3 = 5.1;

let f1 = (v2 * v2) - (4 * (v1 * v3));

if( f1 < 0) {
    console.log('invalido')
} else if(f1 > 0){

    let raiz = Math.sqrt(f1);

    if( raiz < 0) {
        console.log('invalido')
    } else {
        let x1 = (-v2 + raiz) / (2 * v1);
    
        let x2 = (-v2 - raiz) / (2 * v1);
        
        console.log(`${x1.toFixed(4)} esse e o valor de X1`);
        
        console.log(`${x2.toFixed(4)} esse e o valor de X2`)
    }

}




