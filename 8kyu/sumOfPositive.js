// [1,-4,7,12] => 1 + 7 + 12 = 20

// var positiveSum = arr => arr.filter(ele => ele > 0).reduce((a,b) => a + b);

var positiveSum = arr => {
	arr = arr.filter(ele => ele > 0)
	if (arr.length === 0) return 0;
	else return arr.reduce((a,b) => a + b);
}