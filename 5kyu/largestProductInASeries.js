var greatestProduct = str => {
	let arr = str.split("");
	let anwsArr = [];
	for(let i = 0; i < arr.length - 4; i++) {
		let holder = [];
		for(let j = i; j < i + 5; j++) holder.push(arr[j]);
		anwsArr.push(holder.reduce((a,b) => parseInt(a) * parseInt(b)));
	}
	return anwsArr.sort((a,b) => b - a)[0];
}