function descendingOrder(n) {
  let arr = n.toString();
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    numbers.push(el);
  }

  let result = numbers.sort((a, b) => b - a);
  result = result.toString();
  result = result.replace(/,/g, '');
  return (result = parseInt(result, 10));
}

console.log(descendingOrder(145263));
