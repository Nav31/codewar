function interleave () {
	let holder = [], count = 0;
	let args = Array.prototype.slice.call(arguments);
	if(args.length === 0 || args[0] === null) return [];
	let doSomething = arr => {
		for(let i = 0; i < arr.length; i++) {
			holder.push(arr[i][count]);
		}
		count++;
		return args;
	}
	while(count < args[0].length) {
		doSomething(args);
	}
	return holder;
}
