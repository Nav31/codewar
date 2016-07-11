var countBy = (x, n) => {
	let holder = [];
	for(let i = x; holder.length < n; i += x) holder.push(i)
	return holder;
}