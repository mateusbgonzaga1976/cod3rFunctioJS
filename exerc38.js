function oddNumbers(start = 0, end = 100){
    if(start > end){
        start = start + end;
        end = start - end;
        start = start - end;
    }

    for(let i = start; i <= end; i += 1){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

oddNumbers(20, 10);
console.log();
oddNumbers(10, 20);
console.log();
oddNumbers(0, 100);