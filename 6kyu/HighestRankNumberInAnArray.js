const highestRank = arr => {
	let holder = {};
	arr.forEach(elem => elem in holder ? holder[elem]++ : holder[elem] = 1);
	return parseInt(Object.keys(holder).sort((a,b) => holder[a] - holder[b]).pop());
}