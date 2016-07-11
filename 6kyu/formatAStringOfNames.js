// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

var list = arr => {
	let holder = [], str = "";
	arr.forEach(ele => holder.push(ele.name));
	if(holder.length === 0) return "";
	if(holder.length === 1) return holder[0];
	if(holder.length === 2) return holder[0] += " & " + holder[1];
	if(holder.length >= 3){
		for(let i = 0; i < holder.length - 1; i++) {
			str += holder[i] + ", "
		}
		str = str.substring(0, str.length - 2)
		str += ' & ' + holder[holder.length - 1]
		return str;
	}
}