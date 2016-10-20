function prefill (n, v) {
    if(isNaN(parseInt(n)) || parseInt(n) < 0 || (parseFloat(n) % 1 !== 0)) throw new TypeError(n + " is invalid")
    else {
        n = parseInt(n);
        let ans = [];
        while(ans.length < n) {
            ans.push(v)
        }
        return ans;
    }
}