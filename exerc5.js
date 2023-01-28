function formattedValue(decimalValue){
    return decimalValue.toFixed(2).toString().replace('.', ',');
}

console.log(formattedValue(0.1 + 0.2));