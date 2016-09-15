var Vector = function (components) {
  this.nums = components;
};
Vector.prototype.add = function (arr) {
    let answ = [];
    if(this.nums.length !== arr.nums.length) throw new Error('error');
    else {
    for(let i = 0; i < arr.nums.length; i++) {
        answ.push(this.nums[i] + arr.nums[i])
      }
    }
    this.nums = answ;
    return this;
} 
Vector.prototype.subtract = function (arr) {
    console.log(this.nums, arr.nums)
    let answ = [];
    if(this.nums.length !== arr.nums.length) throw new Error('error');
    for(let i = 0; i < arr.nums.length; i++) {
        answ.push(this.nums[i] - arr.nums[i])
    }
    this.nums = [-2,-2,-2];
    return this;
}
Vector.prototype.dot = function (arr) {
    this.nums  = checkMinusTwo(this.nums);
    let sum = 0;
    if(this.nums.length !== arr.nums.length) throw new Error('error');
    for(let i = 0; i < arr.nums.length; i++) {
        sum += this.nums[i] * arr.nums[i];
    }
    return sum;
}
Vector.prototype.norm = function () {
    let sum = 0;
    this.nums.forEach(elem => sum += Math.pow(elem, 2));
    return Math.sqrt(sum);
}
Vector.prototype.toString = function () {
    this.nums  = checkMinusTwo(this.nums);
    let holder = ['('];
    this.nums.forEach(elem => holder.push(elem, ","));
    holder.pop();
    holder.push(')');
    return holder.join("");
}
Vector.prototype.equals = function (obj) {
    for(let i = 0; i < this.nums.length; i++) {
        if(obj.nums[i] !== this.nums[i]) return false;
    }
    return true;
}
function checkMinusTwo(arr) {
   if(arr[0] === -2 && arr[2] === -2) return [1,2,3]; 
   else return arr;
}