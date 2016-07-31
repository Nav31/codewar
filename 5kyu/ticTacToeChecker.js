var isSolved = (arr) => {
	// checks in board is not yet solved / this could go last since 0's are empty space
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length; j++) {
			if(arr[i][j] === 0) return -1;
		}
	}
	// make a function that takes in an arr and checks in all nums are the same
	let allSame = someArr => {
		for(let i = 0, j = i+1; i < someArr.length - 1; i++) {
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
}