
var findOdd = arr => {
	let evenOrOdd = num => num % 2 === 0 ? true : false;
	let count = 0, holder = {};
	for(let i = 0; i < arr.length; i++) {
		if(holder[arr[i]]) holder[arr[i]] ++
		else holder[arr[i]] = 1;
	}
	for(let key in holder) {
		if(!evenOrOdd(holder[key])) return parseInt(key)
	}
}