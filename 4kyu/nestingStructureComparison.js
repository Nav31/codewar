Array.prototype.sameStructureAs = function (other) {
	let typeOfArr = [];
    const flatten = (...args) => {
		return args.reduce((a, b) => {
			if(Array.isArray(b)) typeOfArr.push('array')
			else typeOfArr.push('number')
			return a.concat(Array.isArray(b) ? flatten(...b) : b)
		}, [])
	};
	let thisObj = {result: flatten(this),typeOfArr: typeOfArr}
	typeOfArr = []
	let otherObj = {result: flatten(other),typeOfArr: typeOfArr}
	for(let i = 0; i < thisObj.typeOfArr.length; i++) {
		if(thisObj.typeOfArr[i] !== otherObj.typeOfArr[i]) return false;
	}
	return true;
}
