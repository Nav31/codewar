// https://www.codewars.com/kata/catching-car-mileage-numbers/train/javascript
// 2 if the number is "interesting" (see below)
// 1 if an interesting number occurs within the next two miles
// 0 if the number is not interesting
const zeros = arr => {
	for(let i = 1; i < arr.length; i++) if(arr[i] !== 0) return false;
	return true;
}
const allSame = arr => {
	for(let i = 1; i < arr.length; i++) if(arr[i] !== arr[0]) return false;
	return true;
}
const incrementing = arr => {
	let amount = arr[1] - arr[0];
	for(let i = 0; i < arr.length - 1; i++) {
		if(arr[i+1] - arr[i] !== amount) return false;
	}
	return true;
}
const decrementing = arr => incrementing(arr.reverse());
const isPalindrome = n => n === parseInt(n.toString().split("").reverse().join(""));
const isAPhrase = (n , arr) => arr.indexOf(n) > -1 ? true : false;
const returnNumArr = n => n.toString().split("").map(elem => parseInt(elem));

const isInteresting = (num, awesomePhrases) => {
	if(num < 99) return 0;
	let numArr = returnNumArr(num);
	let numPlus2 = returnNumArr(num+2);
	if(zeros(numArr)) return 2
	else if(allSame(numArr)) return 2
	else if(incrementing(numArr)) return 2
	else if(decrementing(numArr)) return 2
	else if(isPalindrome(numArr)) return 2
	else if(isAPhrase(num, numArr)) return 2
}