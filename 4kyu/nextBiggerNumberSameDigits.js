

var nextBigger = n => {
	let splitNum = n.toString().split("");
	if(n <= 10) return -1;								
	let allSame = 0;
	splitNum.forEach(ele => {if(ele === splitNum[0]) allSame++});
	if (allSame === splitNum.length) return -1;
	let descCheck = splitNum.map(ele => parseInt(ele));
	descCheck = descCheck.sort((a,b) => b-a);
	if(descCheck.join("") == n) return -1;
	let newNum = n+1;
	let foundNum = 0;
	let compareArr = splitNum.map(ele => parseInt(ele));
	compareArr = compareArr.sort((a,b) => a-b);
	compareNum = compareArr.join("");
	while(!foundNum) {
		let newNumArr = newNum.toString().split("");
		newNumArr = newNumArr.map(ele => parseInt(ele));
		newNumArr = newNumArr.sort((a,b) => a-b);
		thisNum = newNumArr.join("");
		if(compareNum === thisNum) foundNum = newNum;
		else newNum++;
	}
	return foundNum;
}


nextBigger(513)