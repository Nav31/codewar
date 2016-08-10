// function lcm () {
// 	let args = Array.prototype.slice.call(arguments);
// 	if (args.length === 1) return args[0];
// 	let holder = [], temp = [], newTemp = [];
// 	for(let i = 0; i < args.length; i++) {
// 		let temp = [];
// 		for(let j = 1; j <= 100; j++) {
// 			temp.push(j*args[i])
// 		}
// 		holder.push(temp);
// 	}
// 	for(let i = 0; i < holder[0].length; i++) {
// 		for(let j = 1; j < holder.length; j++) {
// 			if(holder[j].indexOf(holder[0][i]) > -1) temp.push(holder[0][i])
// 		}
// 	}
// 	for(let i = 0; i < temp.length; i++) {
// 		if(temp[i] === temp[i+1]) newTemp.push(temp[i])
// 	}
// 	return newTemp;
// }

const isPrime = n => {
	if (n <= 1) return false;
	for(let i = 2; i < n; i++) if(n % i === 0) return false;
	return true;
}
const getFacts = n => {
	let holder = [];
	for(let i = 1; i <= n; i++) {
		if(n%i===0) holder.push(i)
	}
	return holder;
}
const getPrimeFacts = arr => {
	let primes = [], composites = []; 
	arr.forEach(elem => isPrime(elem) === true ? primes.push(elem) : composites.push(elem))
	console.log(primes, composites)
}