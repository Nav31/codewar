

var XO = str => {
	let xCounter = 0, oCounter = 0;
	let arr = str.toLowerCase().split("");
	arr.forEach(ele => {if(ele === 'x') xCounter++});
	arr.forEach(ele => {if(ele === 'o') oCounter++});
	return xCounter === oCounter ? true : false;
}