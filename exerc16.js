function calculator(num1, oper, num2){
    switch(oper){
        case 'add':
            return num1 + num2;
        case 'minus':
            return num1 - num2;
        case 'mult':
            return num1 * num2;
        case 'divide':
            return (num1 / num2).toFixed(2);
        case 'mod':
            return num1 % num2;
        case 'pow':
            return num1 ** num2;
        case 'sqrt':
            return num1 * 1/num2;
        default:
            return 'invalid data';
    }
}

console.log(calculator(9, 'add', 3));
console.log(calculator(9, 'minus', 3));
console.log(calculator(9, 'mult', 3));
console.log(calculator(9, 'divide', 3));
console.log(calculator(9, 'mod', 3));
console.log(calculator(9, 'pow', 3));
console.log(calculator(9, 'sqrt', 3));
console.log(calculator(9, 'soma', 3));