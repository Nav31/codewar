var maxZeroSequence = arr => {
	if(arr.reduce((a,b) => a+b) === 0) return arr;
	let counter = 0, holder = [], temp = [];
	for(let i = 0; i < arr.length; i++) {
		counter += arr[i];
		temp.push(arr[i])
		for(let j = i+1; j < arr.length - 1; j++) {
			counter += arr[j];
			temp.push(arr[j]);
			if(counter === 0) {
				holder.push(temp);
				break
			}
		}
		temp = [];
		counter = 0;
	}
	return holder.sort((a,b) => b.length-a.length)[0]
}