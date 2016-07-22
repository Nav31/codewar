function humanReadable(seconds) {
	let padMe = num => {
		let holder = "";
		return num.toString().length < 2 ? holder += '0' + num.toString() : num;
	}
	let newseconds = (seconds % 60);
	let minutes = Math.floor((seconds / 60) % 60);
	let hours = Math.floor((seconds / 3600));
	return padMe(hours) + ":" + padMe(minutes) + ":" + padMe(newseconds)
}

