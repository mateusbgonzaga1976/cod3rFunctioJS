function triangle(l1, l2, l3){
    if((l1 === l2) && (l2 === l3)){
        console.log("Equilateral");
    } else if((l1 === l2) || (l1 === l3) || (l2 === l3)){
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }
}

triangle(3, 3, 3);
triangle(3, 3, 4);
triangle(2, 3, 4);