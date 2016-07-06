

var isMerge = (s, part1, part2) => {
	if(part1 + part2 == s) return true;
	let holder = [];
	let wordArr = s.split("");
	let part1Arr = part1.split("");
	let part2Arr = part2.split("");
	for(var i = 0; i < wordArr.length; i++) {
		let letter1 = wordArr.indexOf(part1Arr[i])
		let letter2 = wordArr.indexOf(part2Arr[i])
		console.log(letter1, wordArr[i])
		if(letter1 !== -1) holder[letter1] = wordArr[letter1]
		if(letter2 !== -1) holder[letter2] = wordArr[letter2]
	}
	console.log(holder.join(""))
	return holder.join("") === s ? true: false;
}






// var isMerge = (s, part1, part2) => {
// 	if(part1 + part2 == s) return true;
// 	let holder = [];
// 	let wordArr = s.split("");
// 	let part1Arr = part1.split("");
// 	let part2Arr = part2.split("");
// 	for(var i = 0; i < wordArr.length; i++) {
// 		let letter1 = wordArr.indexOf(part1Arr[i])
// 		let letter2 = wordArr.indexOf(part2Arr[i])
// 		if(letter1 !== -1) holder.push(wordArr[letter1])
// 		if(letter2 !== -1) holder.push(wordArr[letter2])
// 	}
// 	return holder.join("") === s ? true: false;
// }
