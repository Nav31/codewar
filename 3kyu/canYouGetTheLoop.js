var loop_size = node => {
  let arr = [];
  while (arr.indexOf(node) === -1) {
    arr.push(node);
    node = node.next;
  }
  return arr.length - arr.indexOf(node);
}