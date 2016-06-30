

var longestPalindrome = (string) => {
	if (string.length === 0) return 0;
	var palindromeChecker = (string) => str === str.split("").reverse().join("");
	let array = string.split("");
	let holder = [];
	for(var i = 0; i < array.length; i++) {
		if(palindromeChecker(arr[i])) {
			holder.push(arr[i])
		}
	}
	holder.sort((a,b) => a-b);
	return holder[0].length;
}