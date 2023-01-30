function newSalary(plan, salary){
    switch(plan){
        case 'A':
            return salary + (salary * 1.1);
        case 'B':
            return salary + (salary * 1.15);
        case 'C':
            return salary + (salary * 1.2);
        default:
            return 'Invalid data';
    }
}

console.log(newSalary('A', 1000));
console.log(newSalary('B', 1000));
console.log(newSalary('C', 1000));
console.log(newSalary('D', 1000));