const sortArray = arr => {
	const isEven = num => num % 2 === 0 ? true : false;
	let oddArr = [], evenObj = {}, anws = [];
	arr.forEach((elem, idx) => isEven(elem) === false ? oddArr.push(elem) : evenObj[elem] = idx);
	oddArr = oddArr.sort((a,b) => a-b);
	for(let key in evenObj) {
		anws[evenObj[key]] = parseInt(key);
	}
	for(let i = 0; i < anws.length; i++) {
		anws[i] === undefined ? anws[i] = oddArr.shift() : null;
	}
	while(oddArr.length > 0) anws.push(oddArr.shift());
	return anws;
}