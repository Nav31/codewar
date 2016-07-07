var convertFrac = arr => {
	let holder = [], holder2 = []; // denominators / bunch of numbers
	let lcd;
	arr.forEach(ele => holder.push(ele[1]));
	for(var j = 0; j < holder.length; j++) {
		for(var k = 1; k < 100; k++) {
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
}