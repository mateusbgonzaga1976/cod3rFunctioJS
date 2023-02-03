// Solution based in Cod3r course.

function arithmeticProgression(n, a1, r){
    for(let i = 0; i < n; i +=1){
        console.log(a1 + r * i);
    }
    console.log('Total = ' + (n * (a1 + (a1 + ((n - 1) * r)))) / 2);
}

function geometricProgression(n, a1, r){
    for(let i = 0; i < n; i +=1){
        console.log(a1 * (r ** i));
    }
    console.log('Total = ' + (a1 + ((r**n) - 1)) / (r - 1));
}

arithmeticProgression(10, 10, 15);
console.log();
geometricProgression(10, 10, 15);