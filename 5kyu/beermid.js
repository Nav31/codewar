const beeramid = (bonus, price) => {
  	if(bonus < 0) return 0;
	let maxBeer = Math.floor(bonus/price), level = 0, count = 0;
	while(count <= maxBeer) {
		count += Math.pow(level, 2);
		level++;
	}
	return level-2;
}