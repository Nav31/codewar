function towerBuilder(nFloors) {
	let ans = ['*'], prevStr = "*";
	for(let i = 1; i < nFloors; i++) {
		ans.push(prevStr += "**");
	}
	let longestLen = ans[ans.length-1].length, space = ""
	for(let i = 0; i < Math.floor(longestLen/2); i++) {
		space += " "
	}
	for(let i = 0; i < ans.length; i++) {
		let spaceCopy = space;
		spaceCopy = spaceCopy.substring(ans[i].length-1 - i);
		ans[i] = spaceCopy + ans[i] + spaceCopy;
	}
	return ans
}