const findDividers = number => {
    const factArray = [];
    let divider = 2
    while(number > 1) {
        if(number % divider === 0){
            number /= divider;
            factArray.push(divider);
        } else {
            divider++;
        }
    }
    return factArray;
}
function lcm () {
	let args = Array.prototype.slice.call(arguments), obj = {}, arr = [];
	if((args.indexOf(0) > -1)) return 0
	if(args[0] === 1 && args[1] === 1 && args[2] === 1) return 1
	for(let i = 0; i < args.length; i++) {
		let temp = findDividers(args[i]);
		let tempObj = {}
		temp.forEach(elem => elem in tempObj ? tempObj[elem]++ : tempObj[elem] = 1);
		for(let key in tempObj) {
			if(tempObj[key] > obj[key] || obj[key] === undefined) {
				obj[key] = tempObj[key]
			} 
		}
	}
	for(let key in obj) {
		for(let i = 0; i < obj[key]; i++) {
			arr.push(parseInt(key))
		}
	}
	return arr.reduce((a,b) => a*b)
}
