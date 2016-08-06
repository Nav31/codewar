const letterFrequency = str => {
	let holder = {}, anws = [], something = {};
	let arr = str.toLowerCase().split(" ").join("").split("").sort().replace(/\W/g,"");
	arr.forEach(elem => elem in holder ? holder[elem]++ : holder[elem] = 1);
	let temp = Object.keys(holder).sort((a,b) => holder[b] - holder[a]);
	temp.forEach(elem => elem in holder ? anws.push([elem, holder[elem]]) : null);
	return anws;
}
