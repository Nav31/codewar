const doneOrNot = board => {
	const oneThru9 = arr => arr.reduce((a,b) => a+b) === 45;
	let row, column, region, tempArr = [];
	for(let i = 0; i < board.length; i++) { // for a row
		if(!oneThru9(board[i])) return "Try again!";
	}
	for(let i = 0; i < board.length; i++) { // for a column
		let tempArr = [];
		for(let j = 0; j < board[0].length; j++) {
			tempArr.push(board[j][i]);
		}
		if(!oneThru9(tempArr)) return 'Try again!';
	}
	while(board.length > 0) {  // for a region
		for(let i = 0; i < board[0].length; i++) {
			for(let j = 0; j < 3; j++) {
				if(tempArr.length < 9) tempArr.push(board[j][i]);
			}
			if(tempArr.length === 9) {
				if(oneThru9(tempArr) === false) return 'Try again!'
				else tempArr = [];
			}
		}
		board.splice(0,3);
	}
	return "Finished!"
}