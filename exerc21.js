function healthCareInsurance(age){
    const fixedValue = 100.0;
    if(age < 10){
        return fixedValue + 80.0;
    } else if(age <= 30){
        return fixedValue + 50.0;
    } else if(age <= 60){
        return fixedValue + 95.0;
    } else {
        return fixedValue + 130.0;
    }
}

console.log(healthCareInsurance(0));
console.log(healthCareInsurance(9));
console.log(healthCareInsurance(10));
console.log(healthCareInsurance(29));
console.log(healthCareInsurance(30));
console.log(healthCareInsurance(35));
console.log(healthCareInsurance(59));
console.log(healthCareInsurance(60));
console.log(healthCareInsurance(65));