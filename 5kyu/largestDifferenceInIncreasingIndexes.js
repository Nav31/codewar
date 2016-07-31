var largestDifference = arr => {
	let diff = 0;
	for(let i = 0; i < arr.length; i++) {
		for(let j = i+1; j < arr.length; j++) {
			if(arr[j] >= arr[i]) {
				if(j-i > diff) diff = j-i;
			}
		}
	}
	return diff;
}