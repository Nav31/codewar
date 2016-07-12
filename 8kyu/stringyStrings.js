var stringy = size => {
	let alt = 0, str = "";
	for(let i = 0; i < size; i++) {
		if(alt === 0) {
			str += 1;
			alt = 1;
		} else {
			str += 0
			alt = 0;
		}
	}
	return str;
}