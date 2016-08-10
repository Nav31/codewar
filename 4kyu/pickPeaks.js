// http://www.codewars.com/kata/pick-peaks/train/javascript

const allSame = arr => arr.filter((elem, pos) => arr.indexOf(elem) === pos).length === 1;
const pickPeaks = arr => {
	let holder = {"pos": [], "peaks": []};
	if(arr.length === 0) return 0;
	// check for plateau by using all same
	let midArr = arr.slice(1, arr.length-1);
	if(allSame(midArr)) {
		if(arr[0] < arr[1] && arr[1] > arr[0]) {
			holder["pos"].push(1)
			holder["peaks"].push(arr[1])
		}
		return holder;
	}
	for(let i = 1; i < arr.length - 1; i++) {
		if(arr[i-1] < arr[i] && arr[i] > arr[i+1]) {
			holder["pos"].push(i);
			holder["peaks"].push(arr[i]);
		}
	}
	return holder;
}