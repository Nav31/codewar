function interleave () {
	let holder = [], count = 0;
	let args = Array.prototype.slice.call(arguments);
	if(args.length === 0 || args[0] === null) return [];
	let doSomething = arr => {
		arr.forEach(ele => holder.push(ele[count]));
		count++;
	}
	while(count < args[0].length) doSomething(args);
	return holder;
}
