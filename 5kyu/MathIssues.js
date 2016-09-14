Math.round = function(number) {
    let modAmount = number % 1;
    if(modAmount === 0) return number;
    else {
        if(modAmount >= .5) return number + (1-modAmount);
        else return number - modAmount;
    }
};

Math.ceil = function(number) {
  let leftOver = number % 1;
  if(leftOver === 0) return number;
  else if(leftOver > 0) return number + (1-leftOver);
};

Math.floor = function(number) {
  return 0; // TODO: fix this
};