const letterFrequency = str => {
	let holder = {}, anws = [], something = {};
	let arr = str.toLowerCase().replace(/[^a-zA-Z]/g,"").split("").sort();
	arr.forEach(elem => elem in holder ? holder[elem]++ : holder[elem] = 1);
	let temp = Object.keys(holder).sort((a,b) => holder[b] - holder[a]);
	for(let key in holder) {
		if(holder[key] in something) something[holder[key]].push(key)
		else something[holder[key]] = [key];
	}
	for(let key in something) something[key].sort();
	for(let key in something) {
		while(something[key].length !== 0) {
			anws.push([something[key].pop(), parseInt(key)]);
		}
	}
	return anws.reverse()
}
