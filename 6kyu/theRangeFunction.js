function range (start, stop, step) {
	let holder = [], args = Array.prototype.slice.call(arguments);
	if(args[2] === 0) for(let i = start; i < stop; i++) holder.push(1);
	else if(args.length === 1) for(let i = 0; i < args[0]; i++) holder.push(i);
	else if(args.length === 3) for(let i = start; i < stop; i += step) holder.push(i);
	else for(let i = start; i < stop; i++) holder.push(i);
	return holder;
}