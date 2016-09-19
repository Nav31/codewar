const sumStrings = (a,b) => {
    let answ = [], carryOver = 0, greater;
    a.length > b.length ? greater = a : greater = b;
    a = a.split(""), b = b.split("");
    if(a.length > b.length) {
    	while(b.length !== a.length) b.unshift(0);
    } else {
    	while(a.length !== b.length) a.unshift(0);
    }
    for(let i = greater.length-1; i >= 0; i--) {
        let sum = parseInt(a[i]) + parseInt(b[i]) + carryOver;
        if(sum >= 10) {
            carryOver = parseInt(sum.toString().split("")[0]);
            answ.push(parseInt(sum.toString().split("")[1]));
        } else{
            carryOver = 0;
            answ.push(sum);
        }
    }
    if(carryOver > 0) answ.push(carryOver)
    if(answ[answ.length - 1] === 0) answ.pop()
    return answ.reverse().join("");
}