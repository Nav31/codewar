function pascalsTriangle(n) {
    let ans = [1,1,1], leftSide = 1, rightSide = 1, previousArr = [1,1,1];
    if(n === 1) return [1];
    if(n === 2) return ans;
    for(let i = 3; i <= n; i++) {
        let tempArr = [leftSide];
        for(let j = 0; j < i-2; j++) {
            tempArr.push(previousArr[j] + previousArr[j+1]);
        } 
        tempArr.push(rightSide);
        previousArr = tempArr;
        ans.push(tempArr);
    }
    return ans.reduce((a,b) => a.concat(b), []);
}