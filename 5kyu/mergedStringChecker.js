

var isMerge = (s, part1, part2) => {
	if(part1 + part2 == s) return true;
	let holder = [];
	let wordArr = s.split("");
	let part1Arr = part1.split("");
	let part2Arr = part2.split("");
	for(var i = 0; i < wordArr.length; i++) {
		let letter1 = wordArr.indexOf(part1Arr[i])
		let letter2 = wordArr.indexOf(part2Arr[i])
		if(letter1 !== -1) holder.push(wordArr[letter1])
		if(letter2 !== -1) holder.push(wordArr[letter2])
	}
	return holder.join("") === s ? true: false;
}









	for(var i = 0; i < part1Arr.length; i++) {
		let something = wordArr.indexOf(part1Arr[i]);
		if(something > -1) holder[something] = part1Arr[i]
		let cow = 0
		for(var j = cow; j < part2Arr.length; j++) {
			let sec = wordArr.indexOf(part2Arr[j])
			// console.log(sec, part)
			if(sec > -1) {
				holder[sec] = part2Arr[j];
				break
			}
		}
	}