// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

function humanReadable(seconds) {
	let time = "";
	var padMe = num => {
		let holder = "";
		if(num.toString().length < 2){
			holder += "0" + num.toString();
		} else return num;
		return holder;
	}
	let newseconds = (seconds % 60);
	let minutes = Math.floor((seconds / 60) % 60);
	let hours = Math.floor((seconds / 3600));
	return padMe(hours) + ":" + padMe(minutes) + ":" + padMe(newseconds)
}

