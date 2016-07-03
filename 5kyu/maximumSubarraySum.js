// https://www.codewars.com/kata/maximum-subarray-sum/train/javascript

var maxSequence = arr => {
	let holder = [];
	let runningSum = Number.NEGATIVE_INFINITY;
	for (var i = 0; i < arr.length; i++) {
		let n = 1;
		for (var j = arr.length; j > 0; j--) {
			var subArray = arr.slice(i, j+n)
			if(subArray.length === 0) break 
			else {
				var subArraySum = subArray.reduce((prev, curr) => prev + curr);
				if(subArraySum > runningSum) {
					runningSum = subArraySum;
					n++;
				}	
			}
		}
	}
	return runningSum;
}