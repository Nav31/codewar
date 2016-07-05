// https://www.codewars.com/kata/sum-of-intervals/train/javascript
// Write a function called sumIntervals that accepts an array of intervals, 
// and returns the sum of all the interval lengths. 
// Overlapping intervals should only be counted once.


function sumIntervals(intervals){
  	var holder = [];
  	intervals.forEach(ele => {
	    for (var i = ele[0] ; i < ele[1] ; i++) {
	      	if (holder.indexOf(i) === -1) holder.push(i);
	    	}
	  	});
  	return holder.length;
}