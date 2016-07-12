var isSquare = (n) => {
	for(var i = 0; i < n; i++) {
		if(i * i === n) return true;
	}
	return false;
}

var findNextSquare = n => {
	if(!isSquare(n)) return -1;
	else {
		let sqrt = Math.sqrt(n);
		for(let i = sqrt+1; i < n; i++) {
			let test = i * i;
			if(isSquare(test)) return test;
		}
	}
	return -1;
}