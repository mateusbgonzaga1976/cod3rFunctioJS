function leapYear(year){
    if(year % 400 == 0){
        return true;
    } else if(year % 100 == 0){
        return false;
    } else if(year % 4 == 0){
        return true;
    } else {
        return false;
    }
}

console.log(leapYear(0));
console.log(leapYear(4));
console.log(leapYear(100));
console.log(leapYear(400));
console.log(leapYear(2020));
console.log(leapYear(2021));