var Vector = function (components) {
  // TODO: Finish the Vector class.
  this.nums = components;
  this.answ = [];
  this.sum = 0;
  this.holder = ['(']
};
Vector.prototype.add = function (arr) {
    if(this.nums.length !== arr.nums.length) throw Error;
    for(let i = 0; i < arr.nums.length; i++) {
        this.answ.push(this.nums[i] + arr.nums[i])
    }
    return this.answ;
} 
Vector.prototype.subtract = function (arr) {
    if(this.nums.length !== arr.nums.length) throw Error;
    for(let i = 0; i < arr.nums.length; i++) {
        this.answ.push(this.nums[i] - arr.nums[i])
    }
    return this.answ;
}
Vector.prototype.dot = function (arr) {
    if(this.nums.length !== arr.nums.length) throw Error;
    for(let i = 0; i < arr.nums.length; i++) {
        this.sum += this.nums[i] * arr.nums[i];
    }
    return this.sum;
}
Vector.prototype.norm = function () {
    this.nums.forEach(elem => this.sum += Math.pow(elem, 2));
    return Math.sqrt(this.sum);
}
Vector.prototype.toString = function () {
    this.nums.forEach(elem => this.holder.push(elem, ","));
    this.holder.pop();
    this.holder.push(')');
    return this.holder.join("");
}
Vector.prototype.equals = function (obj) {
    return this.nums == obj.nums;
}
