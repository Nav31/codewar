

var toWeirdCase = str => {
	let arr = str.split(" "), holder = [];
	arr.forEach(ele => holder.push(ele.split("")));
	for(let i = 0; i < holder.length; i++) {
		for(let j = 0; j < holder[i].length; j+=2) {
			holder[i][j] = holder[i][j].toUpperCase()
		}
	}
	holder = holder.join(" ").split('');
	return holder.filter(ele => ele !== ',').join("")
}