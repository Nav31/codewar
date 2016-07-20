var solution = (input, markers) => {
	let arr = input.split("\n");
	let splitHolder = [], str = "";
	arr.forEach(ele => splitHolder.push(ele.split("")));
	for(let i = 0; i < splitHolder.length; i++) {
		for(let j = 0; j < markers.length; j++) {
			let idx = splitHolder[i].indexOf(markers[j]);
			if(idx > -1) splitHolder[i].splice(idx-1, splitHolder[i].length);
		}
	}
	for(let i = 0; i < splitHolder.length; i++) {
		let joinedStr = splitHolder[i].join("");
		str += joinedStr + '\n';
	}
	return str.split("").slice(0, str.length-1).join("");
}

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);