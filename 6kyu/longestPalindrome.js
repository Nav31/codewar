

// for Node v0.10.33
var longestPalindrome = function(string)  {
	if(string.length === 0) return 0;
	var palindromeChecker = function (str) {
		return str === str.split("").reverse().join("");
	};
	var arr = string.split("");
	var count = 1;
	for(var i = 0; i < arr.length; i++) {
		for(var j = i+1; j < arr.length; j++) {
			var word = arr.slice(i, j+1).join("");
			if(palindromeChecker(word)) {
				if(word.length > count) count = word.length
			}
		}
	}
	return count;
}

// for Node v6.00 / Babel
var longestPalindrome = string => {
	if(string === "") return 0;
	const palindromeChecker = str => str === str.split("").reverse().join("");
	const arr = string.split("");
	let count = 1;
	for(var i = 0; i < arr.length; i++) {
		for(var j = i+1; j < arr.length; j++) {
			let word = arr.slice(i, j+1).join("");
			if(palindromeChecker(word)) {
				if(word.length > count) count = word.length
			}
			else break; 
		}
	}
	return count;
}

