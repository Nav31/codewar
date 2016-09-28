function solution (roman) {
    const map = {'I':1, 'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000,}
    let valArr = [], newValArr = [];
    let charArr = roman.split("");
    charArr.forEach(elem => elem in map ? valArr.push(map[elem]) : null);
    for(let i = 0; i < valArr.length; i++) {
    	if(valArr[i] < valArr[i+1]) {
    		newValArr.push(valArr[i+1] - valArr[i]);
    		valArr[i+1] = 0;
    	} else newValArr.push(valArr[i]);
    }
    return newValArr.reduce((a,b) => a+b);
}