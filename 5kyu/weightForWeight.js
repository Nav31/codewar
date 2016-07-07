var orderWeight = string => {
	if(string.length === 0) return "";
	const weightArr = string.split(" ");
	let holder = {}, anwsArr = [], str = "";
	for(let i = 0; i < weightArr.length; i++) {
		holder[weightArr[i]] = (weightArr[i].split("").reduce((prev, curr) => parseInt(prev) + parseInt(curr)));
	}
	for(let weight in holder) {
		anwsArr.push([weight, holder[weight]])
	}
	anwsArr.sort((a,b) => a[1] - b[1]);
	anwsArr.forEach(ele => str += ele[0] + " ");
	return str.trim();
}