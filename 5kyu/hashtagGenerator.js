

var generateHashTag = (str) => {
	if(("#" += str).length > 140) return false;
	if(str.length === 0) return false;
	let hash = '#';
	let array = str.split("");
	let holder = [];
	for (var i = 0; i < array.length; i++) {
		holder.push(array[i].slice(0,1).toUpperCase())
	}
	return holder;
}