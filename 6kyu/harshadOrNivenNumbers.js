var Harshad = ( function() {
  'use strict';
  return {
    isValid: function( number ) {
        let numArr = number.toString().split("");
        let sum = numArr.reduce((a,b) => parseInt(a) + parseInt(b));
        if(number % sum === 0) return true
        else return false;
    },
    getNext: function( number ) {
        let num = 0;
        number = number + 1;
        while(num === 0) {
            if(Harshad.isValid(number)) num = number
        }
        return number;
    },
    getSerie: function( count, start ) {
        let holder = [];
        for(let i = start; i < count; i++) {
            if(Harshad.isValid(i)) holder.push(i)
        }
        return holder;
        }
  };
} () );



