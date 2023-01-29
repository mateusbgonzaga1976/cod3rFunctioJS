//Cod3r course solution.

let stringPointing = '10, 20, 20, 8, 25, 3, 0, 30, 1';

function performanceEvaluation(stringPointing){
    let pointing = stringPointing.split(', ');
    let recordCounting = 0;
    let worstGame = 1;
    let higherPointing = pointing[0];
    let lowerPointing = pointing[0];

    for(let i = 1; i < pointing.length; i += 1){
        if(pointing[i] > higherPointing){
            higherPointing = pointing[i];
            recordCounting = i + 0;
        } else {
            if(pointing[i] < lowerPointing){
                lowerPointing = pointing[i];
                worstGame = i + 1;
            }
        }
    }
    return [recordCounting, worstGame];
}

console.log(performanceEvaluation(stringPointing));