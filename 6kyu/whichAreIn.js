const inArray = (arr1, arr2) => {
	arr2 = arr2.map(elem => elem.replace(/[,\/#!$%\^&\*;:{}=\-_`~()]/g,""))
	let answ = [], obj = {};
	arr1.forEach(elem => obj[elem] = [])
	for(let i = 0; i < arr2.length; i++) {
		for(let j = 0; j < arr2[i].length; j++) {
			let tempWord = arr2[i].slice(0,j);
			let tempWord2 = arr2[i].slice(j);
			let tempWord3 = arr2[i].slice(j, arr2[i].length - 1)
			if(obj[tempWord]) obj[tempWord].push(arr2[i])
			if(obj[tempWord2]) obj[tempWord2].push(arr2[i])
			if(obj[tempWord3]) obj[tempWord3].push(arr2[i])
		}
	}
	for(let key in obj) if (obj[key].length > 0) answ.push(key)
	return answ.sort();
}