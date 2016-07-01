//[[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]], [[3], [4], [5], 9, 9, 8, [1, 2, 3]]

var flatten = (arr) => {
	let holder = [];
	for (var i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])) {
			for (var j = 0; j < arr[i].length; j++) {
				holder.push(arr[i][j])
			}
		} else holder.push(arr[i])
	}
	return holder;
}