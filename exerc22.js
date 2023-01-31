function monthlyPayment(month, annuity){
    if(month > 0 && month < 13){
        const paymentDelay = month - 1;
        return (annuity * ((1 + (5/100)) ** paymentDelay)).toFixed(2);
    } else {
        return 'Invalid data';
    }
}

console.log(monthlyPayment(10, 100));