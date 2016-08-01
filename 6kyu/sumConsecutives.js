

const sumConsecutives = arr => {
	let holder = [], count = 0;
	for(let i = 0, j=i+1; i < arr.length; i++) {
		if(arr[i] === arr[j]) count += arr[i]
		else {
			holder.push(arr[i])
			if(count > 0) holder.push(count)
		}
	}
	return count;
}