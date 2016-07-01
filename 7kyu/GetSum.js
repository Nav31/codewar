

var GetSum = (a, b) => {
	let sum = 0;
	let temp;
	if(a>b) {
		temp = b
		b=a
		a=temp;
	}
	for(var i = a; a<=b; a++) {
		sum += a
	}
	return sum;
}