//https://www.codewars.com/kata/extract-the-domain-name-from-a-url-1/train/javascript

var domainName = url => url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];

// or this...

var domainName = url => {
	let re = /[a-zA-Z0-9]|\W+/g;
	let matches = url.match(re);
	let holder = "";
	for(var i = 0; i < matches.length; i++) {
		if(matches[i] === '://' ) {
			if(matches[i+3] === '.') {	// to see if after the '://' is 'www.'
				for(var k = i + 4; k < matches.length; k++)
					if(matches[j] !== '.') holder += matches[j]
					else break;
			} else {
				for(var j = i+1; j < matches.length; j++) {
					if(matches[j] !== '.') holder += matches[j]
					else break
				} 
			}
		} 
		if(matches[i] === 'w' && matches[i+1] === 'w' && matches[i+3] === '.') {
			for(var l = i+4; l < matches.length; l++) {
				if(matches[l] !== '.') holder += matches[l]
				else break;
			}
		} 
		else {
      		for(var m = 0; m < matches.length; m++) {
        		if(matches[m] !== '.') holder += matches[m]
        		else break
      		}
    	}
	}
	return holder;
}