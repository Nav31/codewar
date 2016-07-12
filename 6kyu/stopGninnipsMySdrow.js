

var spinWords = str => {
	let arr = str.split(" ");
	let holder = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i].length >= 5) holder.push(arr[i].split("").reverse().join(""))
		else holder.push(arr[i]);
	}
	return holder.join(" ").toString();
}