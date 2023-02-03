function stringCheck(string1, string2){
    let clousers = true;

    for(let i = 0; i < string1.length; i += 1){
        let charsString1 = string1.charAt(i).toLowerCase();
        for(let j = 0; j < string2.length; j += 1){
            let charsString2 = string2.charAt(j).toLowerCase();
                if(charsString1 === charsString2){
                    clousers = true;
                    break;
                } else {
                    clousers = false;
                }
        }
        if(!clousers){
            return clousers;
        }
    }
    return clousers;
}

console.log(stringCheck('abc', 'Cba'));
console.log(stringCheck('abc', 'Dba'));