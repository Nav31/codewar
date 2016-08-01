const solution = str => {
	let arr = str.split(""), holder = [];
	for(let i = 0; i < arr.length; i+= 2) {
		holder.push([arr[i], arr[i+1]].join(""))
	}
	let idx = holder.indexOf(undefined);
	if (holder[holder.length - 1].length === 1) holder[holder.length - 1] += "_";
	return holder;
}