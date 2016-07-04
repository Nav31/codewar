var pigIt = (str) => {
	let holder = ''
	const ay = 'ay';
	let arr = str.split(" ")
	for(var i = 0; i < arr.length; i++) {
		let firstLetter = arr[i].slice(0,1)
		arr[i] += firstLetter + ay
		holder += (arr[i].slice(1,arr[i].length))
		holder += " "
	}
	return holder.trim()
}


var newPig = str => {
    let newHolder = "";
    const ay = 'ay';
    let arr = str.split(" ");
    for(var i = 0; i < arr.length; i++) {
        let firstLetter = arr[i].spice(0,1);
        arr[i] += firstLetter + ay;
        newHolder
    }
}