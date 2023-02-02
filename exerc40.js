const vector = [-1.0, 0.0, 3.0, 4.9, 5.0, 6.0, 6.9, 7.0, 8.1, 8.9, 9.0, 9.5, 10.0, 12.0];

function gradesRating(gradeVect){
    let concept = [];
    for(let i = 0; i < gradeVect.length; i += 1){
        if(gradeVect[i] < 0.0){
            concept.push('N/A');
        } else if(gradeVect[i] <= 4.9){
            concept.push('D'); 
        } else if(gradeVect[i] <= 6.9){
            concept.push('C');
        } else if(gradeVect[i] <= 8.9){
            concept.push('B');
        } else if(gradeVect[i] <= 10.0){
            concept.push('A');
        } else {
            concept.push('N/A');
        }
    }
    return concept;
}

console.log(gradesRating(vector));