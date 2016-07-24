var whoIsNext = (names, canNum) => {
	let obj = {}, colaCounter = 1;
	names.forEach(ele => obj[ele] = 1);
	while(colaCounter < canNum) {
		let person = names.shift();
		obj[person] = 2;
		while(obj[person] > 0) {
			names.push(person)
			obj[person]--
		}
		colaCounter++;
	}
	console.log(names[0])
}

// whoIsNext( [ 'Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard' ], 1802)
// whoIsNext( [ 'Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard' ], 1)
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)