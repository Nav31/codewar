var numberToPrice = num => {
	if(typeof num !== 'number') return 'NaN';
	let arr = num.toString().split("");
	let panda = arr;
	let decimal = arr.indexOf('.');
	if(decimal > -1) arr = arr.slice(0, decimal);
	for(let i = arr.length; i > 0; i-=3) arr.splice(i,0, ',');
	arr.pop();
	let anws, changeAmount;
	if(decimal === -1) changeAmount = '.00'
	else changeAmount = panda.splice(decimal,3).join("");
	if(changeAmount.length < 3) {
		changeAmount += '0';
		anws = arr.join("") + changeAmount;
	};
	anws = arr.join("") + changeAmount;
	if(anws.split("")[0] === ',') return anws.shift();
	if(anws.split("")[1] === ',' && anws.split("")[0] === '-'){
		anws = anws.split("")
		return anws.splice(0,1) + anws.slice(1).join("")
	}
   return anws
}