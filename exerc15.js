function carModels(car){
    switch(car){
        case 'hatch':
            return 'successful sale!';
        case 'sedan': case 'motorcycle': case 'truck':
            return 'Are sure that you do not prefer other models?';
        default:
            return 'We do not work with this model.'
    }
}

console.log(carModels('hatch'));
console.log(carModels('sedan'));
console.log(carModels('motorcycle'));
console.log(carModels('truck'));
console.log(carModels('couple'));