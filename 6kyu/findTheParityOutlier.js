var findOutlier = arr => {
	let evenArr = [], oddArr = [];
	let isEven = num => num % 2 === 0 ? true : false;
	for(let i = 0; i < arr.length; i++) {
		if(isEven(arr[i])) evenArr.push(arr[i])
		else oddArr.push(arr[i])
	}
	return evenArr.length > oddArr.length ? oddArr[0] : evenArr[0];
}