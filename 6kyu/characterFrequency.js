const letterFrequency = str => {
	let holder = {}, anws = [], something = {};
	let arr = str.toLowerCase().replace(/[^a-zA-Z]/g,"").split("").sort();
	arr.forEach(elem => elem in holder ? holder[elem]++ : holder[elem] = 1);
	for(let key in holder) {
		holder[key] in something ? something[holder[key]].push(key) : something[holder[key]] = [key];
	}
	for(let key in something) something[key].sort();
	for(let key in something) {
		while(something[key].length !== 0) anws.push([something[key].pop(), parseInt(key)]);
	}
	return anws.reverse()
}
