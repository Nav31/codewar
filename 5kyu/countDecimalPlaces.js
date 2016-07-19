var decimalPlaces = n => {
	if('NaN' === n.toString() || n === Infinity || n === -Infinity) return 0;
	let arr = n.toString().split("");
	let idx = arr.indexOf('.'), eIdx = arr.indexOf('e');
	let counter = 0;
	if(idx === -1 && eIdx === -1) return 0;
	if(idx > -1 && eIdx > -1) {
		let tempCount = idx;
		while(tempCount !== eIdx-1) {
			counter+=1;
			tempCount++
		}
		let temp = parseInt(arr.slice(eIdx+1).join(""));
		if(temp < -1) return counter += temp * -1;
		else return counter += temp;
	}
	if(idx > -1 && eIdx === -1) {	// only decimal place no 'e'
		for(let i = idx + 1; i < arr.length; i++) counter++;
		return counter;
	}
	if(idx === -1 && eIdx > -1) {	// only 'e' no decimal places
		let temp = parseInt(arr.slice(eIdx+1).join(""));
		if(temp < -1) return counter += temp * -1;
	}
}

