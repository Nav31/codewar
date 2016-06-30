

var something = (arr) => {
	let holder = [], temp;
	for (var i = 0; i < arr.length; i++) {
		if(temp !== arr[i]) {
			holder.push(arr[i])
			temp = arr[i]
		}
	}
	return holder;
}
