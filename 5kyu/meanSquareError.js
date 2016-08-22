const solution = (arr1, arr2) => {
	let diffArr = [];
	for(let i = 0; i < arr1.length; i++) {
		diffArr.push(Math.abs(arr1[i] - arr2[i]))
	}
	diffArr = diffArr.map(elem => elem * elem);
	return diffArr.reduce((a,b) => a+b) / diffArr.length;
}

