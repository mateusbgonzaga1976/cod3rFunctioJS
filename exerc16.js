function calculator(num1, oper, num2){
    switch(oper){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case 'divide':
            return (num1 / num2).toFixed(2);
        case '%':
            return num1 % num2;
        case '**':
            return num1 ** num2;
        case '*/':
            return num1 * 1/num2;
        default:
            return 'invalid data';
    }
}

console.log(calculator(9, '+', 3));
console.log(calculator(9, '-', 3));
console.log(calculator(9, '*', 3));
console.log(calculator(9, '/', 3));
console.log(calculator(9, '%', 3));
console.log(calculator(9, '**', 3));
console.log(calculator(9, '*/', 3));
console.log(calculator(9, 'add', 3));