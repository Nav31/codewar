

var isSquare = (n) => {
	if(n === 0 || 1) return true;
	for(var i = 0; i < n; i++) {
		if(i * i === n) return true;
	}
	return false;
}