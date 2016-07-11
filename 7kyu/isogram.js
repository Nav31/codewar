

var isIsogram = str => {
	let arr = str.toLowerCase().split("");
	for(let i = 0; i < arr.length; i++) {
		if(arr.indexOf(arr[i], i + 1) > -1) return false;
	}
	return true;
}