


var isPrime = num => {
  	if (num <= 1) return false;
	let holder = [];
	for(var i = 1; i <= num; i++) {
		if(num % i === 0) holder.push(i)
	}
	return holder.length >= 3 ? false : true;
}
