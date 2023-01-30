function total(cod, qty) {
    switch (cod) {
        case 100:
            return qty * 3.00;
        case 200:
            return qty * 4.00;
        case 300:
            return qty * 5.50;
        case 400:
            return qty * 7.50;
        case 500:
            return qty * 3.50;
        case 600:
            return qty * 2.80;
        default:
            return 'Invalid data';
    }
}

console.log(total(100, 2));
console.log(total(200, 2));
console.log(total(300, 2));
console.log(total(400, 2));
console.log(total(500, 2));
console.log(total(600, 2));
console.log(total(700, 2));