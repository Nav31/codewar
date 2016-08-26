function combine () {
	let arrs = Array.prototype.slice.call(arguments);
	let holder = [], largestArrayIdx=0, largestArrLen=0;
	for(let i = 0; i < arrs.length; i++) {
		if(arrs[i].length > largestArrLen) {
			largestArrayIdx = i;
			largestArrLen = arrs[i].length;
		}
	}
	while(arrs[largestArrayIdx].length > 0) {
		for(let i = 0; i < arrs.length; i++) {
			holder.push(arrs[i][0]);
			arrs[i].shift();
		}
	}
	return holder.filter(elem => elem !== undefined);
}