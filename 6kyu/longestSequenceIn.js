
var longestSequenceIn = string => {
	if(string.length === 0) return 0;
	let arr = string.split(" ").map(ele => parseInt(ele))
	let ogArr = arr;
	let incrementVal = arr[1] - arr[0];
	let counter = 1;
	let holder = [];
	for(var i = 0; i < arr.length; i++) {
		for(var j = i + 1; j < arr.length; j++) {
			if(arr[j] - arr[i] === incrementVal) {
				counter++
				break
			}
			else {
				incrementVal = arr[j+1] - arr[i+1];
				holder.push(arr.slice(0, j));
				arr = arr.slice(0, j)
			}
		}
	}
	if (ogArr.length === 3 && counter < 3) return 2;
	return !holder[0] ? counter : ogArr.slice(holder[0].length).length
}

//Find the length of longest subsequence of same incrementing values
function longestSequenceIn(string)
{
  if(string==""){
    return 0;
  }
  
  var arr = string.split(' ').map(Number);  
  
  if(arr.length<3){
    return arr.length;
  }
  
  var max = 2;
  var current = 2;
  var diff = arr[1] - arr[0];
  for(var i = 2; i<arr.length; i++){
    if(arr[i]==arr[i-1]+diff){
      current++;
    }
    else{
      if(current>max){
        max = current;
      }
      current = 2;
      diff = arr[i]-arr[i-1];
    }
  }
  return Math.max(max,current);
}

