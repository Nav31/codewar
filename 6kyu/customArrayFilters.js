 Array.prototype.even = function(){
    let arr = this.filter(elem => Number.isInteger(elem)).map(elem => parseInt(elem));
    return arr.filter(elem => elem % 2 === 0);
}
Array.prototype.odd = function(){
  let arr = this.filter(elem => Number.isInteger(elem)).map(elem => parseInt(elem));
  return arr.filter(elem => elem % 2 > 0);
}
Array.prototype.under = function(x){
  let arr = this.filter(elem => Number.isInteger(elem));
  return arr.filter(elem => elem < x);
}
Array.prototype.over = function(x){
  let arr = this.filter(elem => Number.isInteger(elem));
  return arr.filter(elem => elem > x);
}
Array.prototype.inRange = function(min,max){
  let arr = this.filter(elem => Number.isInteger(elem));
  return arr.filter(elem => elem >= min && elem <= max);
}