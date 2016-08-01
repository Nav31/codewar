const sortme = arr => {
	let obj = {};
	arr.forEach(ele => obj[ele] = ele.toLowerCase().charCodeAt(0));
	return Object.keys(obj).sort((a,b) => obj[a] - obj[b]);
}