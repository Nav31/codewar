

var countSheeps = arr => arr.filter(Boolean).length;

// or

function countSheeps(arr) {
  let total = 0;
  arr.forEach(ele => {if(ele === true) total++});
  return total;
}