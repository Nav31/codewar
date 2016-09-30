function Dictionary(words) {
  this.words = words;
}
Dictionary.prototype.getMatchingWords = function(pattern) {
  let holder = [], ogWord;
  let patternArr = pattern.split("");
  for(let i = 0; i < this.words.length; i++) {
      let singleWordArr = this.words[i].split("");
      ogWord = this.words[i];
      for(let j = 0; j < patternArr.length; j++) {
          if(patternArr[j] === '?' && j < singleWordArr.length) singleWordArr[j] = '?';
      }
      if(singleWordArr.join("") === patternArr.join("")) holder.push(ogWord); 
  }
  return holder;
}