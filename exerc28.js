let vector = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3];

function evensOdds(vectNumb){
    let even = 0;
    let odd = 0;

    for(let i = 0; i < vectNumb.length; i += 1){
        if(vectNumb[i] % 2 == 0){
            even += 1;
        } else {
            odd += 1;
        }
    }
    console.log(`${even} evens numbers and ${odd} odds numbers.`);
}

evensOdds(vector);