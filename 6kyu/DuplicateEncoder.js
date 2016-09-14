const duplicateEncode = word => {
    let wordObj = {}, charas = word.toLowerCase().split(""), anws = "";
    charas.forEach(char => char in wordObj ? wordObj[char]++ : wordObj[char] = 1);
    charas.forEach(elem => wordObj[elem] === 1 ? anws += '(' : anws += ')');
    return anws;
}