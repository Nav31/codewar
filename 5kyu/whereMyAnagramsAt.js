

var anagrams = (word, words) => {
	word = word.split("").sort().join("");
	return words.filter(ele => word === ele.split("").sort().join(""));
}