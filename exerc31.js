const vector = [1, 2, -100, 99, 45, -34, 80, -89, 100, -2, 0];

function negativeNumbers(numbers){
    let count = 0;

    for(let i = 0; i < numbers.length; i += 1){
        if(numbers[i] < 0){
            count += 1;
        }
    }
    console.log(`Negative numbers total = ${count}`);
}

negativeNumbers(vector);