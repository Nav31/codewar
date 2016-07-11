

var doubleChar = str => {
	let arr = str.split("");
	let anws = "";
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < 2; j++) {
			anws+= arr[i];
		}
	}
	return anws;
}