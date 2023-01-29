//Based on the Cod3r course solution;

function studentRating(grade){
    let finalGrade = roundedNote(grade);
    if(finalGrade >= 40.0){
        console.log(`Approved! Score = ${finalGrade}`);
    } else {
        console.log(`Failled! Score = ${finalGrade}`);
    }
}

function roundedNote(grade){
    if(grade % 5 > 2){
        return grade + (5 - (grade % 5));
    } else {
        return grade;
    }
}

studentRating(100);
studentRating(30);
studentRating(38);
studentRating(88);
studentRating(61);