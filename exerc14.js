function fruitKind(fruit){
    switch(fruit){
        case 'apple':
            return 'We do not sell apples';
        case 'kiwi':
            return 'We running out with kiwi today';
        case 'watermelon':
            return 'Here we are! It costs US$ 5.00. Thanks';
        default:
            return 'We do not work with this kind of fruit';
    }
}

console.log(fruitKind('apple'));
console.log(fruitKind('kiwi'));
console.log(fruitKind('watermelon'));
console.log(fruitKind('orange'));