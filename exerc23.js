function finalGradeCalc(cod, grade1, grade2, grade3){

    const code = cod;
    const grades = [];
    grades.push(grade1);
    grades.push(grade2);
    grades.push(grade3);
    grades.sort((a, b) => a < b ? 1 : -1);

    if(code > 0){
        const average = ((grades[0] * 4.0) + (grades[1] * 3.0) + (grades[2] * 3.0)) / 10.0;
        if(average >= 5.0){
            return (`Student code: ${cod}; Grades: ${grade1}, ${grade2}, ${grade3}; Average = ${average}. Approved!`);
        } else {
            return (`Student code: ${cod}; Grades: ${grade1}, ${grade2}, ${grade3}; Average = ${average}. Failed!`);
        }
    } else {
        return 'Invalid data!';
    }
}

console.log(finalGradeCalc(123, 2.8, 6.0, 3.5));
console.log(finalGradeCalc(124, 8.8, 6.0, 9.5));
console.log(finalGradeCalc(-125, 9.8, 9.0, 7.5));
console.log(finalGradeCalc(125, 9.8, 9.0, 7.5));
console.log(finalGradeCalc(126, 8.0, 9.0, 10.0));