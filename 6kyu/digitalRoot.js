

var digital_root = (n) => {
	let numLen = n.toString().length;
	if(numLen === 1) return n
	else {
		let num = n.toString();
		num = num.split("");
		let sum = num.reduce((prev,curr) => parseInt(prev) + parseInt(curr));
		return digital_root(sum);
	}
}