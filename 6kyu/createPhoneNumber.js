var createPhoneNumber = arr => {
	let holder = "(";
	for(let i = 0; i < 3; i++) holder += arr[i];
	holder += ") ";
	for(let i = 3; i < 6; i++) holder += arr[i];
	holder += '-';
	for(let i = 6; i < arr.length; i++) holder += arr[i];
	return holder;
}