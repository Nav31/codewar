const snail = mainArr => {
	let ans = [];
	const flatten = (...args) => args.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(...b) : b), []);
    function arrayTraverser(arr) {
        let temp = [];
        temp.push(arr.shift());
        for(let i = 0; i < arr.length; i++) {
            temp.push(arr[i].pop());
        } 
        let last = arr.pop()
        if(last) last.reverse();
        temp.push(last);
        for(let i = arr.length-1; i > 0 ; i--) {
            temp.push(arr[i].shift());
        }
        return temp;
    }
    while(mainArr.length > 0) ans.push(arrayTraverser(mainArr));
    return flatten(ans).filter(elem => elem !== undefined);
}