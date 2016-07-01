
String.prototype.toJadenCase = function () {
	let holder = "";
	let array = this.split(" ")
	for (var i = 0; i < array.length; i++) {
		holder += array[i].charAt(0).toUpperCase() + array[i].slice(1) + " "
	}
	return holder.trim();
};