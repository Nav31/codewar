var isSolved = arr => {
	let allSame = someArr => {
		for(let i = 0, j = i+1; i < someArr.length; i++) {
			if(someArr[i] !== someArr[j]) return false;
		}
		return true;
	}
	for(let i = 0; i < arr.length; i++) {
		if(allSame(arr[i]) && arr[i][0] > 0) return arr[i][0];
	}
	for(let i = 0; i < arr[0].length; i++) {
		let holder = [];
		holder.push(arr[0][i], arr[1][i], arr[2][i]);
		if(holder.indexOf(0) > -1) break;
		if(allSame(holder)) return arr[0][i];
	}
	let leftHolder = [], rightholder = [];
	leftHolder.push(arr[0][0], arr[1][1], arr[2][2]);
	rightholder.push(arr[0][2], arr[1][1], arr[2][0]);
	if(allSame(leftHolder) && arr[0][0] > 0) return arr[0][0];
	if(allSame(rightholder) && arr[0][0] > 0) return arr[1][2];
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length; j++) {
			if(arr[i][j] === 0) return -1;
		}
	}
	return 0;
}