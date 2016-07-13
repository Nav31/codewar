var deleteNth = (arr, lim) => {
	let holder = {}, anwsArr = [];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] in holder) holder[arr[i]]++
		else holder[arr[i]] = 1;
	}
	for(let key in holder) {
		if(holder[key] > lim) holder[key] = holder[key] - lim;
		while(holder[key] > 0) {
			anwsArr.push(key);
			holder[key]--;
		}
	}
	anwsArr = anwsArr.map(ele => parseInt(ele));

}