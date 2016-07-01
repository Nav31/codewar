
var squareDigits = (num) => {
	let numArray = num.toString().split("");
	return parseInt((numArray.map((n) => parseInt(n) * parseInt(n))).join(""));
}