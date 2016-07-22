var palindromeChainLength = n => {
	let bool = false, newNum = n, count = 1;
	let reverseNum = num => parseInt(num.toString().split("").reverse().join(""));
	let isPalindrome = num => num === reverseNum(num);
	if(isPalindrome(n)) return 0;
	while(!bool) {
		if(isPalindrome(newNum + reverseNum(newNum))) bool = true;
		else {
			newNum = newNum + reverseNum(newNum);
			count++;
		}
	}
	return count;
}