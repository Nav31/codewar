var order = str => {
	let arr = str.split(" ");
	let holder = [], obj = {};
	for(let i = 0; i < arr.length; i++) {
		holder.push(arr[i].split("").sort().join(""));
		obj[arr[i].split("").sort().join("")] = arr[i];
	}
	newArr = holder.sort();
	for(let key in obj) {
		let idx = newArr.indexOf(key);
		newArr[idx] = obj[key];
	}
	return newArr.join(" ").toString();
}

order("is2 Thi1s T4est 3a")