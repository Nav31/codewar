var whoIsNext = (names, num) => {
	let holder = [], nameholder = "", nameholder2 = "", counter = 0;
	for(let i = 1; i < num; i++) {
		let currentName = names.shift();
		nameholder = currentName;
		nameholder2 = currentName;
		names.push(nameholder, nameholder2);
	}
	return names[0];
}
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)