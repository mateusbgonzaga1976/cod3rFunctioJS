function baskara(a, b, c){
    let D, x, x1, x2;
    if(a === 0){
        console.log('There is not a second degree equation!');
    } else {
        D = Math.pow(b, 2) - 4 * a * c;
        if(D < 0){
            console.log('There are no roots in the field of reals.');
        } else if(D == 0){
            x = (-b)/(2 * a);
            console.log(`x = ${x}`);
        } else if(D > 0){
            x1 = ((-b) + Math.sqrt(D))/(2 * a);
            x2 = ((-b) - Math.sqrt(D))/(2 * a);
            console.log(`x1 = ${x1} / x2 = ${x2}`);
        }
    }
}

baskara(0, 3, 2);
baskara(1, 3, 2);