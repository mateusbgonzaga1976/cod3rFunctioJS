// Cod3r course solution;

function growthCalc(heigth1, rate1, heigth2, rate2){
    if(heigth1 == heigth2){
        if(rate1 > rate2){
            return 'Child 1 will become higher than child 2 in one year.';
        } else if(rate1 < rate2){
            return 'Child 2 will become higher than child 1 in one year.'; 
        } else {
            return 'Children have the same rate of height and growth.';
        }
    } else {
        if(heigth1 > heigth2){
            if(rate1 >= rate2){
                return 'The smaller child will not become higher than the higher child.';
            } else {
                return timeCalc(heigth2, rate2, heigth1, rate1);
            }
        } else {
            if(rate2 >= rate1){
                return 'The smaller child will not become higher than the higher child.';
            } else {
                return timeCalc(heigth1, rate1, heigth2, rate2);
            }
        }
    }
}

function timeCalc(heightLower, rateHeightLower, heightHigher, rateHeightHigher){
    let qtyYears = 0;
    while(heightLower < heightHigher){
        heightLower += rateHeightLower;
        heightHigher += rateHeightHigher;
        qtyYears += 1;
    }
    console.log(qtyYears);
    return qtyYears;
}

console.log(growthCalc(150, 2, 130, 4));