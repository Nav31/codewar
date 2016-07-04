// The variance for a set of numbers is found by:
// 1. subtracting the mean from every value, // done
// 2. squaring the results, 
// 3. adding them all up and dividing by the number of elements.

var variance = nums => {
	const mean = nums.reduce((prev, curr) => prev + curr) / nums.length;
	let holder1 = nums.map(ele => ele - mean);
	let holder2 = holder1.map(ele => ele * ele);
	return holder2.reduce((prev,curr) => prev + curr) / holder2.length;
}

varience([1,2,2,3])