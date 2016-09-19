const findEvenIndex = arr => {
    const sumArr = someArr => someArr.reduce((a,b) => a+b);
    for(let i = 0; i < arr.length-1; i++) {
        let left = arr.slice(0, i+1), right = arr.slice(i, arr.length);
        if(sumArr(left) === sumArr(right)) return i;
    }
    return -1
}