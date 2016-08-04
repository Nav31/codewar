const incrementing = arr => {
	let diff = arr[1] - arr[0], count = 0;
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] + diff !== arr[i+1] && count >= 2) return arr[i];
		count++;
	}
}
const solution = arr => {
	let holder = "", firstNum, lastNum;
	for(let i = 0; i < arr.length; i++) {
		if(arr[i]+1 === arr[i+1] && arr[i+1]+1 ===arr[i+2]) {
			firstNum = arr[i];
			lastNum = incrementing(arr.slice(i));
			i = arr.indexOf(lastNum);
			if(firstNum !== undefined && lastNum !== undefined) {
				holder += firstNum + '-' + lastNum+",";
			} 
		} else holder += arr[i]+",";
	}
	return holder.substring(0, holder.length-1);
}