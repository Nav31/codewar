// can't use array or obj methods -__- / hence all the code;
var removeZeros = arr => {
    let holder = 0, last = arr[arr.length - 1], numbersOfZeros = 0;
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] === 0 || arr[i] === '0') numbersOfZeros++;
    }
    for(let i = 0; i < arr.length; i++) {
		if(!numbersOfZeros) break;
			if(arr[i] === 0 || arr[i] === '0') {
				holder = arr[i];
				for(let j = i; j < arr.length; j++) arr[j] = arr[j+1];
				arr[arr.length - 1] = holder
				i--;
				numbersOfZeros--;
			}
	}
  	return arr
}