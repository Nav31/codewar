// https://www.codewars.com/kata/catching-car-mileage-numbers/train/javascript
// 2 if the number is "interesting" (see below), 
// 1 if an interesting number occurs within the next two miles, 
// 0 if the number is not interesting.

function sameNums (arr) {
	if (arr.length >= 3) {
		for(let i = 0; i < arr.length; i++) {		// check if all numbers are the same
			if(arr[0] !== arr[i]) return false;
		}
		return true;	
	} else return false;
}
function zeros (arr) {  	// check if all numbers after 1st are 0
	if(arr.length >= 3) {
		for(let i = 1; i <= arr.length - 1; i++) {	
			if(parseInt(arr[i]) !== 0) return false;
		}
		return true;
	} else return false;
}
function increment (arr) {
	let bool = false;
	if(arr.length >= 3) {
		if(parseInt(arr[arr.length - 1]) === 0) arr.splice(-1,1);
		let increm = parseInt(arr[1]) - parseInt(arr[0])
		for(let i = 1; i < arr.length - 1; i++) {
			if(parseInt(arr[i+1]) - parseInt(arr[i]) === increm ) bool = true
			else return false;
		}
	} else bool = false
	return bool;
}	
function decrement (arr) {
	if(arr.length >= 3) {
		let decrem = parseInt(arr[arr.length - 2]) - parseInt(arr[arr.length - 1]);
		for(let i = 0; i < arr.length - 1; i++) {
			if(parseInt(arr[i]) - decrem !== parseInt(arr[i + 1])) return false;	// check decrement is same
		} 
		return true;	
	} else return false;
}
function palindrome (num) {
	let arr = num.toString().split("");
	if(arr.length >= 3) {	// num can only be palind. if length is >= 2;
		return num === parseInt(arr.reverse().join(""));
	} else return false;
}
function inArray (arr, num) {
	for(let i = 0; i < arr.length; i++) {
		if (parseInt(arr[i]) === num) return true
	}
	return false;
}
function isInteresting (number, awesomePhrases) {
	let numArr = number.toString().split("");
	let output = 0;
	if(sameNums(numArr)) output = 2;
	if(zeros(numArr)) output = 2;
	if(increment(numArr)) output = 2;
	if(decrement(numArr)) output = 2;
	if(palindrome(number)) output = 2;
	if(inArray(awesomePhrases, number)) output = 2;
	const numPlus1 = number + 1;
	const plus1Arr = numPlus1.toString().split("");
	if(output !== 2) {
		if(sameNums(plus1Arr)) output = 1;
		if(zeros(plus1Arr)) output = 1;
		if(increment(plus1Arr)) output = 1;
		if(decrement(plus1Arr)) output = 1;
		if(palindrome(numPlus1)) output = 1;
		if(inArray(awesomePhrases, numPlus1)) output = 1;
	}

	return output;
}

// isInteresting(3, [1337, 256])