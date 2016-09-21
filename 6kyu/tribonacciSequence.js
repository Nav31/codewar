const tribonacci = (signature, n) => {
    if(signature.length < 3) return signature;
    if(n === 0) return [];
    if(n === 1) return [signature[0]]
    while(signature.length < n) {
        signature.push(signature[signature.length - 1] + signature[signature.length - 2] + signature[signature.length - 3]);
    }
    return signature;
}