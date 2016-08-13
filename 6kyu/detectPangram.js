// using newest v of node
const isPangram = str => {
	let obj = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0};
	const arr = str.toLowerCase().split("");
	arr.forEach(elem => elem in obj ? obj[elem]++ : null);
	let objValArr = Object.values(obj).sort();
	return objValArr[0] === 0 ? false : true;
}
// else
const isPangram = str => {
	let obj = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0};
	const arr = str.toLowerCase().split("");
	arr.forEach(elem => elem in obj ? obj[elem]++ : null);
	let holder = [];
	for(let key in obj) holder.push(obj[key]);
	holder.sort();
	return holder[0] === 0 ? false : true;
}