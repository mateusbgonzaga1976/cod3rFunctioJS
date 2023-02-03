let vector = [1, 2, 3, 4, 5];

function vectorProduct(vector, times){
    let resultVect = [];

    if(times >= 5){
        vector.forEach(e => {resultVect.push(e * times)});
        return resultVect;
    } else if(times < 5){
        vector.forEach(e => {resultVect.push(e * times)});
        return resultVect;
    }
}

console.log(vectorProduct(vector, 3));