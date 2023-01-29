function week(number){
    switch(number){
        case 1: case 7:
            console.log('weekend');
            break;
        case 2: case 3: case 4: case 5: case 6:
            console.log('week day');
            break;
        default:
            console.log('Invalid code');
            break;
    }
}

week(1);
week(2);
week(3);
week(4);
week(5);
week(6);
week(7);
week(8);
week(0);