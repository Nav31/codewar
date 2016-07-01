// A -> T
// G -> C

var DNAStrand = (str) => {
	let dnaArray = str.split("");
	let newDna = [];
	for(var i = 0; i < dnaArray.length; i++) {
		if(dnaArray[i] === 'A' || 'a') {
			newDna.push('T');
		}
		if(dnaArray[i] === 'G' || 'g') {
			newDna.push('C');
		}
		if(dnaArray[i] === 'T' || 't') {
			newDna.push('A');
		}
		if(dnaArray[i] === 'C' || 'c') {
			newDna.push('G');
		}
	}
	return newDna;
}