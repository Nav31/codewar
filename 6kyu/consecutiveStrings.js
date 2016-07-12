var longestConsec = (arr, lim) => {
	if (arr.length === 0 || lim > arr.length || lim <= 0) return "";
	let holder = [], largest = 0;
	for(let i = 0; i < arr.length; i++) {
		holder.push(arr.slice(i, i+lim));
	}
	let numArr = holder.map(ele => ele.join("").length);
	numArr.forEach(ele => {if(ele > largest) largest = ele});
	let idx = numArr.indexOf(largest);
	return holder[idx].join("").toString();
}