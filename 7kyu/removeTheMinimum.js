/* Given an array of integers, remove the smallest value. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list. Don't change the order of the elements that are left. */
var removeSmallest = arr => {
	let counter = arr[0], idx;
	arr.forEach(ele => {if(ele < counter) counter = ele});
	idx = arr.indexOf(counter);
	arr.splice(idx,1);
	return arr;
}
