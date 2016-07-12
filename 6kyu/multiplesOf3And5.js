var solution = num => {
	let holder = [];
	for(let i = 0; i < num; i++) {
		if(i % 3 === 0 || i % 5 === 0) holder.push(i)
	}
	return holder.reduce((a,b) => a + b);
}