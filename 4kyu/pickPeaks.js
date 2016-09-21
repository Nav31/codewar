const allSame = arr => arr.filter((elem, pos) => arr.indexOf(elem) === pos).length === 1;
const isPlateu = arr => {
	let first = arr.shift(), last = arr.pop();
	if(allSame(arr)) {
		if(first < arr[0] && arr[0] > last) return true
	}
	return false;
}
const pickPeaks = arr => {
	let obj = {"pos": [], "peaks": []};
	for(let i = 1; i < arr.length - 1; i++) {
		if(arr[i-1] < arr[i] && arr[i] >= arr[i+1]) {
			if(arr[i] > arr[i+2]) {
				obj["pos"].push(i);
				obj["peaks"].push(arr[i]);
			}

		}
	}
	for(let i = 0; i < arr.length - 1; i++) {
		newArr = arr.slice(i)
		if(isPlateu(newArr)) {
			obj["pos"].push(i+1);
			obj["peaks"].push(arr[i+1]);
		}
	}
	return obj;
}