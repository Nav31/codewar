

var divisors = (n) => {
	let holder = [];
	for(var i = 0; i < n; i++) {
		if(n % i === 0) {
			holder.push(i)
		}
	}
	holder.shift()
  	if(holder.length === 0) return (n + " is prime")
	return holder;
}

divisors(12)