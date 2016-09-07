// https://www.codewars.com/kata/least-common-multiple/train/javascript
function lcm () {
	let args = Array.prototype.slice.call(arguments), obj = {}, tempObj = {}, answ;
	args.forEach(elem => elem in tempObj ? tempObj[elem]++ : tempObj[elem] = 1);
	args = [];
	for(let key in tempObj) {
		args.push(key);
	}
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
lcm(17, 20, 4, 15, 4, 18, 12, 14, 20, 19, 2, 14, 13, 7)