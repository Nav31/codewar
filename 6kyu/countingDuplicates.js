

var duplicateCount = str => {
	let arr = str.toLowerCase().split("");
	let holder = {}, count = 0;
	for(let i = 0; i < arr.length; i++) {
		if(holder[arr[i]]) holder[arr[i]]++
		else holder[arr[i]] = 1;
	}
	for(let key in holder) {
		if(holder[key] > 1) count++
	}
	return count;
}