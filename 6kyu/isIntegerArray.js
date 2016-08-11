

const isIntArray = arr => {
	if(arr.length === 0) return true;
	let bool = true;
	arr.forEach(elem => {if(Number.isInteger(elem) === false) bool = false})
	return bool;
}