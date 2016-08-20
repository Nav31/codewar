// http://www.codewars.com/kata/which-are-in
const inArray = (arr1, arr2) => {
	let answ = [], obj = {};
	arr1.forEach(elem => obj[elem] = [])
	for(let i = 0; i < arr2.length; i++) {
		for(let j = 0; j < arr2[i].length; j++) {
			let tempWord = arr2[i].slice(j)
			if(obj[tempWord]) obj[tempWord].push(arr2[i])
		}
	}
	for(let key in obj) if (obj[key].length > 0) answ.push(key)
	return answ;
}