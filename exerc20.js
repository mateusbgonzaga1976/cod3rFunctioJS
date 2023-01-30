//Cod3r course solution

function withdraw(withdrawValue) {
    let count100 = 0;
    let count50 = 0;
    let count10 = 0;
    let count5 = 0;
    let count1 = 0;
    let bankNoteValue = bankNoteValueCalc(withdrawValue);

    while (withdrawValue >= bankNoteValue) {
        switch (bankNoteValue) {
            case 100:
                withdrawValue -= 100;
                count100++;
                break;
            case 50:
                withdrawValue -= 50;
                count50++;
                break;
            case 10:
                withdrawValue -= 10;
                count10++;
                break;
            case 5:
                withdrawValue -= 5;
                count5++;
                break;
            case 1:
                withdrawValue -= 1;
                count1++;
                break;
        }
        bankNoteValue = bankNoteValueCalc(withdrawValue);
    }
    return resultValue(count100, count50, count10, count5, count1);
}

function bankNoteValueCalc(withdrawValue){
    if(withdrawValue >= 100){
        return 100;
    } else if(withdrawValue >= 50){
        return 50;
    } else if(withdrawValue >= 10){
        return 10;
    } else if(withdrawValue >= 5){
        return 5;
    } else if(withdrawValue >= 1){
        return 1;
    }
}

function resultValue(count100, count50, count10, count5, count1){
    let result = ' ';
    if(count100 > 0){
        result += `${count100} ballot(s) of US$ 100.\n`;
    }

    if(count50 > 0){
        result += `${count50} ballot(s) of US$ 50.\n`;
    }

    if(count10 > 0){
        result += `${count10} ballot(s) of US$ 10.\n`;
    }

    if(count5 > 0){
        result += `${count5} ballot(s) of US$ 5.\n`;
    }

    if(count1 > 0){
        result += `${count1} ballot(s) of US$ 1.\n`;
    }
    return result;
}

console.log(withdraw(153));