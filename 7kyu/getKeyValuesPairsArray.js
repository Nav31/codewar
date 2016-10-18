const keysAndValues = data => {
  let keys = Object.keys(data), values = [];
  for(let key in data) {
    values.push(data[key])
  }
  return [keys, values];
}