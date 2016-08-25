const josephus = (arr, k) => {
	if(arr.length <= 1) return arr;
	let answ = [], idx = k-1;
	while(arr.length !== 0) {
		if(idx > arr.length-1) idx = (idx % arr.length);
		answ.push(arr[idx]);
		arr.splice(idx, 1);
		idx = idx + k-1;
	}
	return answ;	
}