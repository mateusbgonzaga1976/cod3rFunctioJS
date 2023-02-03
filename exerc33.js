let integerVec = [1, 2, 3, 4];
let stringVec = ['one', 'two', 'three', 'four'];
let floatVec = [1.1, 2.2, 3.3, 4.4];

function vectorConc(...arg){
    let result = [];
    for(i = 0; i < arg.length; i += 1){
        result = result.concat(arg[i]);
    }
    return result;
}

console.log(vectorConc(integerVec, stringVec));
console.log(vectorConc(integerVec, floatVec));
console.log(vectorConc(floatVec, stringVec));