Array.prototype.numberOfOccurrences = function(elem) {
  let obj = {};
  this.forEach(elem => elem in obj ? obj[elem]++ : obj[elem] = 1);
  return obj[elem] === undefined ? 0 : obj[elem]
}