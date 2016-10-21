function getMichaelLastName(inputText) {
  let michaelArr = [], ansArr = []
  let splitArr = inputText.split('Michael');
  for(let i = 0; i < splitArr.length; i++) {
  	michaelArr.push(splitArr[i].split(" ")[1]);
  }
  for(let i = 0; i < michaelArr.length; i++) {
  	if(/[A-Z]/.test(michaelArr[i])) ansArr.push(michaelArr[i]);
  }
  return ansArr.join(" ").replace(/[^a-zA-z]/g, " ").split(" ").filter(elem => elem !== "");
}