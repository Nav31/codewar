const searchArray  = (arrayToSearch, query) => {
	if(!Array.isArray(arrayToSearch) || !Array.isArray(query) || query.length !== 2 || !Array.isArray(arrayToSearch[0]) || arrayToSearch[2].length !== 2) throw new Error;
    for(let i = 0; i < arrayToSearch.length; i++) {
        for(let j = 0; j < arrayToSearch[i].length; j++) {
            if(arrayToSearch[i][j] !== query[j]) break;
            else if(arrayToSearch[i][j] === query[j] && j === query.length - 1) return i; 
        }
    }
    return -1
}