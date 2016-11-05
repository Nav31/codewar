function sumOfDivided(lst) {
    let pFactors = {}, ans = [];
    const getPrimeFactors = number => {
        let divisor = 2;
        number = Math.abs(number);
        while(number > 1) {
            if(number % divisor === 0){
                number /= divisor;
                divisor in pFactors ? null : pFactors[divisor] = [];
            } else divisor++;
        }
    }
    lst.forEach(elem => getPrimeFactors(elem));
    for(let i = 0; i < lst.length; i++) {
        for(let key in pFactors) {
            if(lst[i] % parseInt(key) === 0) pFactors[key].push(lst[i]);
        }
    }
    for(let key in pFactors) pFactors[key] = pFactors[key].reduce((a,b) => a+b);
    for(let key in pFactors) ans.push([parseInt(key), pFactors[key]]);
    return ans;
}