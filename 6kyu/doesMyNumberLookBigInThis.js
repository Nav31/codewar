const narcissistic = num => {
	const numArr = num.toString().split("");
	const numLen = numArr.length;
	let holder = numArr.map(ele => Math.pow(parseInt(ele), numLen));
	return holder.reduce((a,b) => a + b) === num ? true : false;
}