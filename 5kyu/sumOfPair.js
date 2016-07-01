
var sum_pairs=function(ints, s){
	var memo = {};									// creating an empty obj
  	for(var i = 0; i < ints.length; i++) {			// interating through length of array
	    let num = ints[i];		// creting a varible for every element in array
	    let num2 = s - num;		// subtracting the goal number from the current element
	    if(num2 in memo) return [num2,num] // if that numbers in the in the memo obj return both num2 and element
	    else memo[num] = 1;		// else put that number in the memo obj with val set to 1
  	}   
  	return undefined;			// otherwise return undefined
}