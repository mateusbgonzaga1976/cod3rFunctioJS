function simpleInterest(amount, interest, time){
    return amount + (amount * interest / 100) * time;
}

console.log(simpleInterest(1000, 10, 2));

function compoundInterest(amount, interest, time){
    return amount += (amount * (1 + interest / 100) ** time);
}

console.log(compoundInterest(1000, 10, 2));