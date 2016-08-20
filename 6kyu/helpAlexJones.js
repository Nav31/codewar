const toneItDown = str => {
	str = str.toLowerCase();
	let arr = str.charAt(0).toUpperCase() + str.substring(1);
	let newArr = arr.split("");
	newArr = newArr.map(elem => elem.replace(/[.\/#!$%\^&\*;:{}=\-_`~()]/g,""));
	let words = newArr.join("").split(" "), globHolder = [];
	for(let i = 0; i < words.length; i++) {
		if(words[i] === 'globalists') globHolder.push(i)
	}
	if (globHolder.length > 1) {
		for(let i = 1; i < globHolder.length; i++) {
			words[globHolder[i]] = "sociopathic rich guys"
		}
	}
	for(let i = 0; i < words.length; i++) {
		if(words[i] === 'grunt') words[i] = "";
	}
	let sentence = words.filter(elem => elem !== "").join(" ");
	return sentence += ".";
}

toneItDown("THE GLOBALISTS ARE NOT GRUNT GONNA WIN, grunt grunt DERN GLOBALISTS!!")