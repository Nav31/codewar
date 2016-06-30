
// doesn't work
var moveZeros = (arr) => {
	let holder = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == 0) {
			holder.push(arr[i])
			arr.splice(i,1)
		}
	}
	
	return arr.concat(holder)
}

// does work

var moveZeros = function (arr) {
  for(var i = arr.length; i--;) {
      if(arr[i] === 0) {
          arr.splice(i, 1);
          arr.push(0);
      }
  }
  return arr;
}