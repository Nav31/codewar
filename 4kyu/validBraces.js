const validBraces = parens => {
  const parExp = new RegExp(/\(\)|\{\}|\[\]/, 'g'); 
  while(parExp.test(parens)) parens = parens.replace(parExp, '');
  return parens.length > 0 ? false : true;
}