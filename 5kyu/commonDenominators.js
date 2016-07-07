var convertFrac = arr => {
	let holder = [], holder2 = [], holder4 = []; // denominators / bunch of numbers
	let lcd;
	let anws = "";
	arr.forEach(ele => holder.push(ele[1]));
	let bool = false
	holder.forEach(ele => {if (ele > 1)  bool = true;})
	if(!bool){
		for(var p = 0; p < arr.length; p++) {
			anws += '(' + arr[p][0] + "," + arr[p][1] + ")"; 
		}
	} else {
		for(var j = 0; j < holder.length; j++) {
		for(var k = 1; k < 100000; k++) {
			holder2.push(k*holder[j])
			}
		}
		holder2 = holder2.sort((a,b) => a-b);
		for(var i = 1; i < holder2.length; i++) {
			if(holder2[i] === holder2[i + holder.length -1]) {
				lcd = holder2[i];
				break
			};
		}
		let holder3 = holder.map(ele => lcd / ele);
		for(var l = 0; l < arr.length; l++) {
			for(var m = 0; m < arr[l].length; m+=2) {
				holder4.push([arr[l][m] * holder3[l], lcd])
			}
		}
		for(var n = 0; n < holder4.length; n++) {
			anws += '(' + holder4[n][0] + ',' + holder4[n][1] + ')'
		}
		return anws;
	}
	return anws;
}