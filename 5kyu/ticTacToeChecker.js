var isSolved = (arr) => {
	// make a function that takes in an arr and checks in all nums are the same
	let allSame = someArr => {
		for(let i = 0, j = i+1; i < someArr.length; i++) {
			if(someArr[i] !== someArr[j]) return false;
		}
		return true;
	}
	// now go in and check if all horizontals are the same in the grid
	for(let i = 0; i < arr.length; i++) {
		if(allSame(arr[i])) return arr[i][0];
	}
	// now check all verticals are the same in the grid
	for(let i = 0; i < arr[0].length; i++) {
		let holder = [];
		holder.push(arr[0][i], arr[1][i], arr[2][i]);
		if(allSame(holder)) return arr[0][i];
	}
	// now check diagonals 
	let leftHolder = [], rightholder = [];
	leftHolder.push(arr[0][0], arr[1[1], arr[2][2]]);
	rightholder.push(arr[0][2], arr[1][1], arr[2][0]);
	if(allSame(leftHolder)) return arr[0][0];
	if(allSame(rightholder)) return arr[1][2];
	// checks in board is not yet solved / this could go last since 0's are empty space
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length; j++) {
			if(arr[i][j] === 0) return -1;
		}
	}
	return 0;
}