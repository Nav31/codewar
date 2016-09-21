const sumIntervals = intervals => {
	let holder = [], obj = {};
	for(let i = 0; i < intervals.length; i++) {
		for(let j = intervals[i][0]; j < intervals[i][1]; j++) {
			holder.push(j)
		}
	}
	holder.forEach(elem => elem in obj ? obj[elem]++ : obj[elem] = []);
	return Object.keys(obj).length
}
function sumIntervals(intervals){
  	var holder = [];
  	intervals.forEach(ele => {
	    for (var i = ele[0] ; i < ele[1] ; i++) {
	      	if (holder.indexOf(i) === -1) holder.push(i);
	    	}
	  	});
  	return holder.length;
}