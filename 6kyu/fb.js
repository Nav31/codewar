const solution = n => {
	holder = [0,0,0];
	for(let i = 1; i < n; i++) {
		if(i % 3 === 0 && i % 5 === 0) holder[2]++;
		else if(i % 3 === 0) holder[0]++;
		else if(i % 5 === 0) holder[1]++;
	}
	return holder;
}