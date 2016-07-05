//https://www.codewars.com/kata/extract-the-domain-name-from-a-url-1/train/javascript

var domainName = url => {
	let re = /[a-zA-Z0-9]|\W+/g;
	let matches = url.match(re);
	let holder = "";
	for(var i = 0; i < matches.length; i++) {
		if(matches[i] === '://' ) {
			// check if the next things are 'www.' if not do what is below 
			// else do what is below start after the www.
			if(matches[i+4] === '.') {	// to see if after the '://' is 'www.'
				for(var k = i + 5; k < matches.length; k++)
					if(matches[j] !== '.') holder += matches[j]
					else break;
			} else {
				for(var j = i+1; j < matches.length; j++) {
					if(matches[j] !== '.') holder += matches[j]
					else break
				} 
			}
		} 
	}
	return holder;
}