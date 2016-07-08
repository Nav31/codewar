// https://www.codewars.com/kata/catching-car-mileage-numbers/train/javascript
// 2 if the number is "interesting" (see below), 
// 1 if an interesting number occurs within the next two miles, 
// 0 if the number is not interesting.

var isInteresting = (number, awesomePhrases) => {
	const numArr = number.toString().split("");
	for(let i = 0; i < numArr.length; i++) {		// check if all numbers are the same
		if(numArr[0] !== numArr[i]) return false;
	}
	for(let i = 1; i < numArr.length; i++) {		// check if all numbers after 1st are 0
		if(numArr[i] !== 0) return false;
	}
	let increment = numArr[1] - numArr[0];
	for(let i = numArr.length - 1; i > 0; i--) {	// check increment is same
		if(numArr[i] - increment !== numArr[i - 1]) return false;
	}
	let decrement = numArr[numArr.length - 2] numArr[numArr.length - 1];
	for(let i = 0; i < numArr.length - 1; i++) {
		if(numArr[i] - decrement !== numArr[i + 1]) return false;	// check decrement is same
	} 
}