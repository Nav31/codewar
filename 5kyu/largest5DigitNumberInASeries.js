var solution = digits => {
	let arr = digits.split(""), holder = [];
	for(let i = 0; i < arr.length; i++) {
		let temp = [];
		for(let j = i; j < i + 5; j++) temp.push(arr[j]);
		holder.push(parseInt(temp.join("")));
	}
	return holder.sort((a,b) => b-a)[0];
}