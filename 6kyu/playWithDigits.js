// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// where n = 46288 && p = power where you start

var digPow = (num, pow) => {
	let sum = 0;
	let numArr = num.toString().split("");
	let power = pow;
	for(var i = 0; i < numArr.length; i++) {
		sum += Math.pow(parseInt(numArr[i]), power)
		power++
	};
	let prevNum = 0;
	for(var j = 1; prevNum < sum; j++) {
		if(num * j === sum) return j
		else prevNum = num * j;
	}
	return -1;
}