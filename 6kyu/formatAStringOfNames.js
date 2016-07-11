// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

var list = arr => {
	let holder = [];
	for(let i = 0; i < arr.length; i++) {
		holder.push(arr[i].name)
	}
	if(holder.length === 0) return "";
	let str = "";
	if(holder.length >= 3){
		for(let i = 0; i < holder.length - 1; i++) {
			str += holder[i] + ", "
		}
		str = str.substring(0, str.length - 2)
		str += ' & ' + holder[holder.length - 1]
		return str;
	}
	if(holder.length === 2) return holder[0] += " & " + holder[1];
	if(holder.length === 1) return holder[0];
}