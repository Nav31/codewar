const sumConsecutives = arr => {
	let holder = [], count = 0;
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] === arr[i+1]) count += arr[i];
		else {
			if(count > -10000) {
				count += arr[i];
				holder.push(count);
				count = 0;
			} else holder.push(arr[i]);
		}
	}
	return holder;
}
sumConsecutives([1,4,4,4,0,4,3,3,1]);