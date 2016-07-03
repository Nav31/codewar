var maxSequence = arr => {
	let max = 0;
	for(var i = 0; i < arr.length; i++) {
		for(var j = arr.length; j > i; j--) {
			let total = arr.slice(i, j).reduce((prev, curr) => prev + curr);
			if(total > max) max = total;
		}
	}
	return max;
}