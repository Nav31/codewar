const findNumber = arr => {
	arr = arr.sort((a,b) => b-a);
	let highest = arr[0], lowest = arr[arr.length - 1], temp = [], missing;
	for(let i = lowest; i <= highest; i++) temp.push(i);
	temp.forEach(elem => arr.indexOf(elem) === -1 ? missing = elem: null)
	return missing === undefined ? 1 : missing
}