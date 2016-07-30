

var isSolved = (arr) => {
	// This checks in any horizonatal winners
	for(let i = 0; i < arr.length; i++) {
		if(arr[i][0] >= 1 && arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) return arr[i][0];
	}
	// This is going to check vertical;
	for(let i = 0; i < arr.length; i++) {
		let temp = []
	}
}