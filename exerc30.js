const vector = [1, 2, -100, 99, 45, -34, 80, -89, 100];

function biggerSmaller(hiLow){
    let bigger = hiLow[0];
    let smaller = hiLow[0];

    for(let i = 0; i < hiLow.length; i += 1){
        if(bigger < hiLow[i]){
            bigger = hiLow[i];
        }

        if(smaller > hiLow[i]){
            smaller = hiLow[i];
        }
    }
    console.log(`Bigger value = ${bigger} - Smaller value = ${smaller}`);
}

biggerSmaller(vector);