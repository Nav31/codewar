function lcm () {
	let args = Array.prototype.slice.call(arguments), obj = {}, answ;
	if(args.length === 0) return 0;
	for(let i = 0; i < args.length; i++) {
		for(let j = 1; j < 1000000; j++) {
			let num = j * args[i]
			num in obj ? obj[num]++ : obj[num] = 1
		}
	}
	for(let key in obj) {
		if(obj[key] === args.length) {
			answ = parseInt(key);
			break;
		}
	}
	if(answ === undefined) return 0;
	else return answ;
}
