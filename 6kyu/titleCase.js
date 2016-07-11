// https://www.codewars.com/kata/title-case/train/javascript

var titleCase = (title, minorWords) => {
  	if(title === "") return "";
	title = title.toLowerCase().split(" ");
	let firstUpper = arr => arr.map(ele => ele.charAt(0).toUpperCase() + ele.slice(1));
	title = firstUpper(title);
  	if(minorWords === undefined) return title.join(" ");
  	minorWords = minorWords.toLowerCase().split(" ");
	minorWords = firstUpper(minorWords);
	for(let i = 1; i < title.length; i++) {
		if(minorWords.indexOf(title[i]) > -1) {
			title[i] = title[i].charAt(0).toLowerCase() + title[i].slice(1);
		}
	}
	return title.join(" ");
}