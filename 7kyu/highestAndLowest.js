function highAndLow(numbers){
  let numArr = numbers.split(" ")
  const getMaxOfArray = arr => Math.max.apply(null, arr);
  const getMinOfArray = arr => Math.min.apply(null, arr);
  let max = getMaxOfArray(numArr), min = getMinOfArray(numArr), anws = "";
  return anws += max + " " + min;
}