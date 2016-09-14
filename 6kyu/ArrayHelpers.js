Array.prototype.square = function () { return this.map(elem => elem*elem); }
Array.prototype.cube = function() { return this.map(elem => Math.pow(elem, 3)); }
Array.prototype.average = function () { return this.length > 0 ? this.reduce((a,b) => a+b) / this.length : NaN;	}
Array.prototype.sum = function () { return this.reduce((a,b) => a+b); }
Array.prototype.even = function () { return this.filter(elem => elem % 2 === 0); }
Array.prototype.odd = function () { return this.filter(elem => elem % 2 > 0); }