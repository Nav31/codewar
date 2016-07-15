// deleteNth ([1,1,1,1],2) // return [1,1]
// deleteNth ([20,37,20,21],1) // return [20,37,21]


var deleteNth = (arr, lim) => {
    if (lim == 0) return [];
    let obj = {};
    return arr.filter(num => {
        obj[num] = (obj[num] || 0) + 1;
        let something = obj[num];
        return something <= lim;
    });
}