function findMissing (arr) {
    let progressionObj = {}, progressionAmount = -Infinity, arrObj = {}, highestCount = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        let sum = arr[i+1] - arr[i];
        if(progressionObj[sum] === undefined) progressionObj[sum] = 1;
        else progressionObj[sum]++;
    }
    for(let key in progressionObj) {
        if(progressionObj[key] > highestCount) {
        	progressionAmount = parseInt(key);
        	highestCount = progressionObj[key]
        }
    }
    arr.forEach(elem => elem in arrObj ? null : arrObj[elem] = elem);
    if(arr[0] > arr[arr.length - 1]) {
    	for(let i = arr[arr.length-1]; i <= arr[0]; i -= progressionAmount) {
    		if(arrObj[i] === undefined) return i
    	}
    } else {
    	for(let i = arr[0]; i < arr[arr.length - 1]; i += progressionAmount) {
    		if(arrObj[i] === undefined) return i;
    	}
    }
}