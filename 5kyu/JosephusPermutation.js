// http://www.codewars.com/kata/josephus-permutation/train/javascript

const josephus = (arr, k) => {
	let answ = [], idx = k-1;
	while(arr.length !== 0) {
		answ.push(arr[idx]);
		arr.splice(idx, 1);
		idx = idx + k-1;
		if(idx > arr.length) idx = idx % arr.length;
	}
	return answ;	
}

josephus([1,2,3,4,5,6,7],3)