const vectorA = [0, 1, 2, 3, 4];
const vectorB = [5, 6, 7, 8, 9];

function exchangeVectors(vectorA, vectorB){
    if(vectorA.length === vectorB.length){
        for(let i = 0; i < vectorA.length; i += 1){
            vectorA[i] = vectorA[i] + vectorB[i];
            vectorB[i] = vectorA[i] - vectorB[i];
            vectorA[i] = vectorA[i] - vectorB[i];
        }
    } else {
        console.log('Vectors with different sizes, compare: ');
    }
    console.log('New A vector = ' + vectorA);
    console.log('New B vector = ' + vectorB);
}

exchangeVectors(vectorA, vectorB);