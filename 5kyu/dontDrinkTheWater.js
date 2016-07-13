var objToArr = (letter, obj) => {
	let temp = [];
	for(let key in obj) {
		if(key === letter) {
			while(obj[key] !== 0) {
				temp.push(key);
				obj[key]--;
			}
		}
	}
	return temp;
}
var separateLiquids = arr => {
	if (arr.length === 0) return [];		// handle empty
	let holder = {}, anwsArr = [], someOtherArr = [], firstArrLen = arr[0].length;
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr[i].length; j++) {
			if(arr[i][j] in holder) holder[arr[i][j]]++
			else holder[arr[i][j]] = 1;
		}
	}
	anwsArr.push(objToArr('O', holder), objToArr('A', holder), objToArr('W', holder), objToArr('H', holder));
	if(arr.length === 1) {
		let newArr = anwsArr.reduce((first, next) => {
			return first.concat(next);
		}, [])
		return [newArr];
	}
	anws = anwsArr.filter(ele => ele.length > 0);
	for(let i = 0; i < anws.length; i++) {
		for(let j = 0; j < anws[i].length; j++) {
			someOtherArr.push(anws[i][j])
		}
	}
	let newNewArr = [];
	let newLen = firstArrLen
	for(let i = 0; i < someOtherArr.length; i += firstArrLen) {
		newNewArr.push(someOtherArr.slice(i, newLen));
		newLen += firstArrLen
	}
	return newNewArr
}