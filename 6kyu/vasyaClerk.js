var tickets = (arr) => {
	let cashOnHand = 0;
	let bills = {25:0, 50:0, 100: 0};
	const cost = 25;
	for (var i = 0; i < arr.length; i++) {
		let change = arr[i] - cost;
		if(change === 0) {
			cashOnHand += arr[i];
			bills[arr[i]] += 1
		} else {
			if(cashOnHand - change < 0) return 'NO'
			else {
				bills[arr[i]] += 1
				cashOnHand = cashOnHand - change
			}
		}
	}
	return 'YES';
}