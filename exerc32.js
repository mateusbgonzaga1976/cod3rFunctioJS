const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function averageArithmetic(averageInt){
    let sum = 0;
    let average = 0;

    for(let i = 0; i < averageInt.length; i += 1){
        sum += averageInt[i];
    }
    average = sum / averageInt.length;
    return average;
}

console.log(averageArithmetic(vector));