

var generateHashtag = (str) => {
	if(str.length === 0) return false;
	let hash = '#';
	let array = str.split(" ");
	let holder = [];
	for (var i = 0; i < array.length; i++) {
		holder.push(array[i].substr(0,1).toUpperCase())
	}
	let stringHoler = "";
	for(var j = 0; j < holder.length; j++) {
		stringHoler += array[j].charAt(0).toUpperCase() + array[j].slice(1)
	}
	
	let finalString = hash += stringHoler.trim();
	if (finalString.length > 140) return false
	else return finalString;
}