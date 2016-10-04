function getLengthOfMissingArray(arrayOfArrays) {
    let obj = {}, ans = 0,returnFalseRN = false;
    if(!Array.isArray(arrayOfArrays)) return 0;
    arrayOfArrays.forEach(elem => !Array.isArray(elem) || elem.length === 0 ? returnFalseRN = true : null);
    if(returnFalseRN) return 0;
    arrayOfArrays.forEach(elem => elem.length in obj ? null : obj[elem.length] = 1);
    let keyArr = Object.keys(obj).map(elem => parseInt(elem)).sort((a,b) => a-b);
    for(let i = 1; i < keyArr[keyArr.length - 1]; i++) {
      if(keyArr.indexOf(i) === -1) ans = i;
    }
    return ans;
}