var toUnderscore = str => {
  	if(typeof str === 'number') return str.toString();
	let firstLetterArr = str.match(/[A-Z]/g)
	let arr = str.split(/[A-Z]/);
	arr.shift();
	let anws = "";
	for(let i = 0; i < firstLetterArr.length; i++) {
		arr[i] = firstLetterArr[i] + arr[i].substring(0)
	}
	arr.forEach(ele => anws += ele + '_')
	return anws.substring(0, anws.length-1).toLowerCase();
}