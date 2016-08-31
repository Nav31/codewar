const flattenTwoLevels = arr => {
	let flatten = (...args) => args.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(...b) : b), []);
	let holder = [];
	arr.forEach(elem => Array.isArray(elem) ? holder.push(flatten(elem)) : holder.push(elem))
	return holder;
}