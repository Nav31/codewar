const rotate = (arr, n) => {
	let hasMoved = 0, newArr = arr.slice(0);
	if(n === 0) return arr;
	else if (n > 0) {
		while(hasMoved < n) {
			newArr.unshift(newArr.pop());
			hasMoved++
		}
		return newArr;
	}
	else if(n < 0) {
		while (hasMoved > n) {
			newArr.push(newArr.shift());
			hasMoved--;
		}
		return newArr;
	}
}