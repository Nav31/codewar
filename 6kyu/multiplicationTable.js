const multiplicationTable = n => {
	let holder = [];
	for(let i = 1; i <= n; i++) {
		let temp = [];
		for(let j = 1; j <= n; j++) {
			temp.push(i*j);
		}
		holder.push(temp)
	}
	return holder;
}