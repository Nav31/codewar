var groupByCommas = n => {
	let arr = n.toString().split("");
	if(arr.length <= 3) return arr.join("");
	for(let i = arr.length-3; i > 0; i-= 3) arr.splice(i, 0, ',');
	return arr.join("");
}