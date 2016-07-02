var iqTest = (numbers) => {
  	const isEven = num => num % 2 === 0;
	let trueCounter = falseCounter = 0;
	let numArr = numbers.split(" ");
	let evenArr = numArr.map(n => isEven(parseInt(n)));
	evenArr.forEach(ele => ele === true ? trueCounter++ : falseCounter++);
	return trueCounter < falseCounter ? evenArr.indexOf(true) + 1 : evenArr.indexOf(false) + 1
}