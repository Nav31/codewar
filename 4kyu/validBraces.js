/*  validBraces( "(){}[]" ) => returns true 
    validBraces( "(}" ) => returns false 
    validBraces( "[(])" ) => returns false 
    validBraces( "([{}])" ) => returns true 
*/
function validBraces(braces) {
    let openingArr = [], closingArr = [], counter = 0;
    for(let i = 0; i < braces.length-1; i++) {
    	if(braces[i] === "(" && braces[i+1] !== ")") counter++;
    	if(braces[i] === "[" && braces[i+1] !== "]") counter++;
    	if(braces[i] === "{" && braces[i+1] !== "}") counter++;
    	if(counter > 0) break;
    }
    if(counter === 0) return true;
    for(let i = 0; i < braces.length; i++) {
        if(braces[i] === "(") openingArr.push(1);
        if(braces[i] === "{") openingArr.push(2);
        if(braces[i] === "[") openingArr.push(3);
        if(braces[i] === ")") closingArr.push(1);
        if(braces[i] === "}") closingArr.push(2);
        if(braces[i] === "]") closingArr.push(3);
    }
    closingArr = closingArr.reverse();
    for(let i = 0; i < openingArr.length; i++) {
        if(openingArr[i] !== closingArr[i]) return false;
    }
    return true;
}    