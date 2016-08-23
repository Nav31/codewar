// http://www.codewars.com/kata/did-i-finish-my-sudoku/train/javascript

const doneOrNot = board => {
	const oneThru9 = arr => arr.reduce((a,b) => a+b) === 45;
	let row, column, region;
	for(let i = 0; i < board.length; i++) { // this is for a row
		if(!oneThru9(board[i])) return "Try again!";
	}
	for(let i = 0; i < board.length; i++) { // for a column
		let tempArr = []
		for(let j = 0; j < board[0].length; j++) {
			tempArr.push(board[j][i])
		}
		if(!oneThru9(tempArr)) return 'Try again!';
	}
	// for a region...
	return "Finished!"
}