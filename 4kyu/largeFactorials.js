function sumBigNums (str1, str2) {
    let ans = "", largerNum, smallerNum, carryOver = 0;
    if(str1.length > str2.length) {
        largerNum = str1;
        smallerNum = str2; 
    } else {
        largerNum = str2;
        smallerNum = str1;
    }
    while(smallerNum.length < largerNum.length) {
    	smallerNum = 0 + smallerNum;
    }
    for(let i = largerNum.length-1; i >= 0; i--) {
        let sum;
        sum = parseInt(largerNum[i]) + parseInt(smallerNum[i]) + parseInt(carryOver);
        if(sum > 9) {
            let sumArr = sum.toString().split("");
            carryOver = sumArr[0];
            ans = sumArr[1] + ans;
        } else {
           	ans = sum + ans
            carryOver = 0;
        }
    }
    if(carryOver > 0) ans = carryOver + ans
    return ans;
}
const recursiveFactorial = n => n <= 1 ? 1 : n * recursiveFactorial(n-1);
function factorial (n) {
	if(n < 0) return null;
	if (n <= 10) return recursiveFactorial(n).toString();
    let ans = n.toString();
    let lineArr = [];
    for(let i = n-1; i >= 1; i--) {
		let ansArr = ans.split(""), carryOver = 0;
        let idxCpy = i, iterCount = 0;
        idxCpy = idxCpy.toString().split("");
        for(let j = idxCpy.length - 1; j >= 0; j--) { // this is for the bottom number multiplying
            let lineNums = ""
            for(let k = ansArr.length - 1; k >= 0; k--) { // top number multiplying
                let product = parseInt(ansArr[k]) * parseInt(idxCpy[j]) + parseInt(carryOver);
                if(product > 9) {
                    carryOver = product.toString().split("")[0];
                    lineNums = product.toString().split("")[1] + lineNums;
                } else {
                    lineNums = product + lineNums ;
                    carryOver = 0;
                }
            }
            for(let i = 0; i < iterCount; i++) {
            	lineNums += "0"
            }
            if(carryOver > 0) lineNums = carryOver + lineNums
            lineArr.push(lineNums);
            lineNums = "";
            carryOver = 0;
            iterCount++;
        }
        console.log(lineArr.length)
        if(lineArr.length === 1) ans = sumBigNums(ans, lineArr.shift());
        else if(lineArr.length === 2) ans = sumBigNums(lineArr.shift(), lineArr.shift());
        else {
        	ans = sumBigNums(lineArr.shift(), lineArr.shift());
        	ans = sumBigNums(ans, lineArr.shift);
        }
    }
    return ans.substring(0, ans.length-1)
}

factorial(100)