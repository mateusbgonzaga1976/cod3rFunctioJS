let stacksVector = [1, 2, 3, 4, 5];
let addVector = [6, 7, 8, 9, 10];

function sumVector(startVector){
    console.log(`Stacks vector: ${startVector}`);
    for(let i = 0; i < addVector.length; i += 1){
        startVector.push(addVector[i]);
    }
    console.log(`Add vector: ${addVector}`);
    console.log(`Result vector: ${startVector}`);
}

sumVector(stacksVector, addVector);