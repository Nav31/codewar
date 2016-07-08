// https://www.codewars.com/kata/weight-for-weight/train/javascript
var orderWeight = string => {
	if(string.length === 0) return "";
	let weightArr = string.split(" ").sort();
	weightArr.sort()
	let holder = {}, anwsArr = [], str = "", multiArr = [], another = [], finalStr = "";
	for(let i = 0; i < weightArr.length; i++) {
		holder[weightArr[i]] = (weightArr[i].split("").reduce((prev, curr) => parseInt(prev) + parseInt(curr)));
	}
	for(let weight in holder) {anwsArr.push([weight, holder[weight]])}
	anwsArr = anwsArr.sort((a,b) => a[1] - b[1]);
	for(let  i = 0; i < anwsArr.length - 1; i++) {
		if(anwsArr[i][1] === anwsArr[i+1][1]) {
			let someArr = [anwsArr[i][0], anwsArr[i+1][0]].sort()
			anwsArr[i][0] = someArr[0];
			anwsArr[i+1][0] = someArr[1]
		}
	}
	anwsArr.forEach(ele => str += ele[0] + " ");
	for(var j = 0; j < weightArr.length; j++) {
		let count = 0;		// getting duplicate values
		for(var k = 0; k < weightArr.length; k++) { if(weightArr[j] === weightArr[k]) count++ }
		if (count >= 2) multiArr.push(weightArr[j])
	}
	multiArr = multiArr.sort((a,b) => a-b);
	multiArr = multiArr.filter((item, pos) => multiArr.indexOf(item) == pos)
	str = str.trim();
	let finalArr = str.split(" ");
	for(var i = 0; i < multiArr.length; i++) {
		let idx = finalArr.indexOf(multiArr[i]);
		if(idx > -1) finalArr.splice(idx, 0, multiArr[i])
	}
	finalArr.forEach(ele => finalStr += ele + " ");
	return finalStr.trim();
}