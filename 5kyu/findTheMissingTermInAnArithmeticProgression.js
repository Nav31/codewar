

var findMissing = arr => {
	let progressionArr = [], progressObj = {}, idx, mostOccuring;
	for(let i = 0; i < arr.length-1; i++) {
		progressionArr.push(arr[i+1] - arr[i]);
	}
	for(let i = 0; i < progressionArr.length - 1; i++) {
		if(progressionArr[i] in progressObj) progressObj[progressionArr[i]] += 1
		else progressObj[progressionArr[i]] = 1;
	}
	for(let key in progressObj) {
		if(progressObj[key] === 1) {
			idx = progressionArr.indexOf(parseInt(key));
		} else mostOccuring = key;
	}
	let here = arr[idx];
	arr.splice(idx+1,0,here+parseInt(mostOccuring));
	return arr;
}