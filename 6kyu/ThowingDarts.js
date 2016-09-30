function scoreThrows(radiuses){
  let bonus = 0;
  let pointArr = [], lessThan5 = true;
  for(let i = 0; i < radiuses.length; i++) {
      if(radiuses[i] < 5) pointArr.push(10);
      if(radiuses[i] >= 5 && radiuses[i] <= 10) {
        pointArr.push(5);
        lessThan5 = false;
      }
  }
  if(pointArr.length === radiuses.length && lessThan5 === true) bonus = 100
  return pointArr.length > 0 ? pointArr.reduce((a,b) => a+b) + bonus : 0;
}