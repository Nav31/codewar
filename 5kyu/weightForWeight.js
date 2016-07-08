var orderWeight = string => {
	if(string.length === 0) return "";
	let weightArr = string.split(" ").sort();
	let holder = {}, anwsArr = [], str = "", multiArr = [], another = [], finalStr = "";
	for(let i = 0; i < weightArr.length; i++) {
		holder[weightArr[i]] = (weightArr[i].split("").reduce((prev, curr) => parseInt(prev) + parseInt(curr)));
	}
	for(let weight in holder) { anwsArr.push([weight, holder[weight]]) }
	anwsArr = anwsArr.sort((a,b) => a[1] - b[1]);
	for(let i = 0; i < anwsArr.length - 1; i++) {
		if(parseInt(anwsArr[i][1]) === parseInt(anwsArr[i+1][1])) { 
			let someArr = [parseInt(anwsArr[i][0]), parseInt(anwsArr[i+1][0])].sort()
			anwsArr[i][0] = someArr[0];
			anwsArr[i+1][0] = someArr[1]
		}
	}
	for(let  i = 0; i < anwsArr.length - 2; i++) {
		if(parseInt(anwsArr[i][1]) === parseInt(anwsArr[i+2][1])) {
			let someArr = [parseInt(anwsArr[i][0]), parseInt(anwsArr[i+1][0]), parseInt(anwsArr[i+2][0])].sort()
			anwsArr[i][0] = someArr[0];
			anwsArr[i+1][0] = someArr[1]
			anwsArr[i+2][0] = someArr[2]
		}
	}
	anwsArr.forEach(ele => str += ele[0] + " ");
	for(let j = 0; j < weightArr.length; j++) {
		let count = 0;		// getting duplicate values
		for(let k = 0; k < weightArr.length; k++) { if(weightArr[j] === weightArr[k]) count++ }
		if (count >= 2) multiArr.push(weightArr[j])
	}
	multiArr = multiArr.sort((a,b) => a-b);
	multiArr = multiArr.filter((item, pos) => multiArr.indexOf(item) == pos)
	str = str.trim();
	let finalArr = str.split(" ");
	for(let i = 0; i < multiArr.length; i++) {
		let idx = finalArr.indexOf(multiArr[i]);
		if(idx > -1) finalArr.splice(idx, 0, multiArr[i])
	}
	finalArr.forEach(ele => finalStr += ele + " ");
	return finalStr.trim();
}
