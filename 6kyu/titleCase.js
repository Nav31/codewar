// https://www.codewars.com/kata/title-case/train/javascript




var titleCase = (title, minorWords) => {
	let firstUpper = arr => arr.map(ele => ele.charAt(0).toUpperCase() + ele.slice(1))
	if(title.length === 0) return '';
	let splitTitle = title.split(" ");
	splitTitle = splitTitle.map(ele => ele.toLowerCase());
	if(minorWords === undefined) return firstUpper(splitTitle)
	else var minorWs = minorWords.split(" ");
	splitTitle = firstUpper(splitTitle);
	minorWs = firstUpper(minorWs)
	let holder = [];
	minorWs.forEach(ele => {
		splitTitle.forEach(word => {
			if (ele === word) {
				holder.push(word.charAt(0).toLowerCase() + word.slice(1))
			} else holder.push(word)
		})
	})
	return holder.slice().join(" ")
}