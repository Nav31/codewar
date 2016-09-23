function padZero (str, n){
    while (str.length !== n) str = '0' + str;
    return str;
}
const add = (n1, n2) => {
    let ansArr = [], carryOver = 0;
    if(n1.length > n2.length) n2 = padZero(n2, n1.length);
    if(n2.length > n1.length) n1 = padZero(n1, n2.length);
    let n1Arr = n1.split(""), n2Arr = n2.split("");
    for(let i = n1Arr.length -1; i >= 0; i--) {
        let sum = parseInt(n1Arr[i]) + parseInt(n2Arr[i]) + carryOver;
        if(sum >= 10) {
            carryOver = parseInt(sum.toString().split("")[0]);
            ansArr.unshift(parseInt(sum.toString().split("")[1]));
        } else {
        	carryOver = 0; 
            ansArr.unshift(sum);
        }
    }
    if(carryOver > 0) ansArr.unshift(carryOver);
    return ansArr.join("");
}