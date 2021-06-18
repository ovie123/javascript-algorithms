const binary = (arr, num) => {
  let lower = 0;
  let upper = arr.length - 1;
  while (lower <= upper) {
    const middle = lower + Math.floor((upper - lower) / 2);
    if (num === arr[middle]) {
      return middle;
    }

    if (num < arr[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return -1;
};

console.log(binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
