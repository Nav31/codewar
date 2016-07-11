

var likes = arr => {
	let anws = "";
	let others = arr.length - 2;
	if(arr.length === 0) return "no one likes this";
	if(arr.length === 1) return anws += arr[0] += ' likes this';
	if(arr.length === 2) return anws += arr[0] += ' and ' + arr[1] + ' like this';
	if(arr.length === 3) return anws += arr[0] += ', ' + arr[1] + ' and ' + arr[2] + ' like this';
	if(arr.length > 3) return anws += arr[0] + ', ' + arr[1] + ' and ' + others + " others like this"; 
	return anws;
}
