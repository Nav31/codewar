var toCamelCase = str => {
	let arr = str.split(""), newArr;
	arr.indexOf('_') > -1 ? newArr = str.split("_") : newArr = str.split("-");
	for(let i = 1; i < newArr.length; i++) {
		let upper = newArr[i].charAt(0).toUpperCase();
		let someArr = newArr[i].split("");
		someArr.shift();
		someArr.unshift(upper);
		newArr[i] = someArr.join("");
	}
	return newArr.join("");
}