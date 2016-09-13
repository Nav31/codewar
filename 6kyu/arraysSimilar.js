const arraysSimilar = (arr1, arr2) => {
	if(arr1.length !== arr2.length) return false;
	arr1 = arr1.sort((a,b) => a-b);
	arr2 = arr2.sort((a,b) => a-b);
	for(let i = 0; i < arr1.length; i++) if(arr1[i] !== arr2[i]) return false;
	return true;
}