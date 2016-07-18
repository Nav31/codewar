var array_diff = (a,b) => {
	if(b.length === 0) return a;
	let holder = [];
	for(let i = 0; i < a.length; i++) {
		for(let j = 0; j < b.length; j++) {
			if(a[i] !== b[j]) holder.push(a[i])
		}
	}
	return holder;
}