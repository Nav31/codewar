function firstNonRepeatingLetter(s) {
	if(s.length === 1) return s;
    let sCopy = s;
    let wordArr = sCopy.toLowerCase().split(""), letterObj = {}, getIdx;
    wordArr.forEach((elem, idx) => elem in letterObj ? letterObj[elem][0]++ : letterObj[elem] = [1, idx]);
    for(let key in letterObj) {
        if(letterObj[key][0] === 1) {
        	getIdx = letterObj[key][1];
        	break;
        }
    }
    if(getIdx) return sCopy.split("")[getIdx];
    else return "";
}