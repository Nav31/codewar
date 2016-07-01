
function maskify(cc) {
	if(cc.length <= 4) return cc.toString();
	let holder = [];
	let ccArray = cc.toString().split("");
	for(var i = 0; i < ccArray.length - 4; i++) {
		holder.push('#')
	}
	for(var i = ccArray.length - 4; i < ccArray.length; i++) {
		holder.push(ccArray[i])
	}
	return holder.join("");
}