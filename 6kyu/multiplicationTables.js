const multiplicationTable = (row, col) => {
	let holder = [];
	for(let i = 1; i <= row; i++) {
		let temp = [];
		for(let j = 1; j <= col; j++) {
			temp.push(i*j);
		}
		holder.push(temp)
	}
	return holder;
}