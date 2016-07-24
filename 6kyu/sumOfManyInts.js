

const f = (n, m) => {
	let holder = [];
	for(let i = 1; i <= n; i++) holder.push(i % m);
	return holder.reduce((a,b) => a+b);
}