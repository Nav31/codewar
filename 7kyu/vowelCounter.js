function getCount(str) {
	let vowelsCount = 0;
	arr = str.toLowerCase().split("");
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {
		  vowelsCount++
		}
	}

	return vowelsCount;
}