let vector = [7, 8, 9, 10, 12, 14, 15, 17, 19, 20, 21, 23];

function between(numbers){
    let inside = 0;
    let outside = 0;

    for(let i = 0; i < numbers.length; i += 1){
        if(numbers[i] >= 10 && numbers[i] <= 20){
            inside += 1;
        } else {
            outside += 1;
        }
    }
    return [inside, outside];
}

console.log(between(vector));