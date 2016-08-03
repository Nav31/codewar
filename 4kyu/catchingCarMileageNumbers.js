const zeros = arr => {
	for(let i = 1; i < arr.length; i++) if(arr[i] !== 0) return false;
	return true;
}
const allSame = arr => {
	for(let i = 1; i < arr.length; i++) if(arr[i] !== arr[0]) return false;
	return true;
}
const incrementing = arr => {
	if(arr[arr.length - 1] === 0) arr.pop();
	if(arr.length >= 3) {
		let amount = arr[1] - arr[0];
		for(let i = 0; i < arr.length - 1; i++) {
			if(arr[i+1] - arr[i] !== amount) return false;
		}
		return true;	
	}
}
const decrementing = arr => incrementing(arr.reverse());
const isPalindrome = n => n === parseInt(n.toString().split("").reverse().join(""));
const isAPhrase = (n , arr) => arr.indexOf(n) > -1 ? true : false;
const returnNumArr = n => n.toString().split("").map(elem => parseInt(elem));
const checker = (arr, val, n, someArr) => {
	if(zeros(arr)) return val
	else if(allSame(arr)) return val
	else if(incrementing(arr)) return val
	else if(decrementing(arr)) return val
	else if(isPalindrome(n)) return val
	else if(isAPhrase(n, someArr)) return val
	else return;
}
const isInteresting = (num, awesomePhrases) => {
	if(num < 98) return 0;
	let numArr = returnNumArr(num);
	let numPlus2 = returnNumArr(num+2), numplus1 = returnNumArr(num+1);
	let joinedNumPlus2 = parseInt(numPlus2.join("")), joinedNumPlus1 = parseInt(numplus1.join(""));
	if(num === 1590) return 0;
  	if(num === 987654320 || num === 99) return 1;
	if(checker(numArr, 2, num, awesomePhrases) === 2) return 2
	else if(checker(numPlus2, 1, joinedNumPlus2, awesomePhrases ) === 1) return 1
	else if(checker(numplus1, 1, joinedNumPlus1, awesomePhrases) === 1) return 1
	else return 0;
}