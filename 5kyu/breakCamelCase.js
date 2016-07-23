const solution = str => {
	let letters = str.match(/[A-Z]/g);
	let holder = [], newStr = "", arr = str.split("");
	letters.forEach(ele => holder.push(str.split("").indexOf(ele)));
	for(let i = 0; i < holder.length; i++) {
		(i > 0) ? arr.splice(holder[i]+1, 0, " ") : arr.splice(holder[i], 0, " ");
	}
	return arr.join("");
}
// or
const solution = str => str.replce(/[A-Z]/g, '$1');