const sumTwoSmallestNumbers = (numbers) => {
  const [first, second] = numbers.sort((a, b) => a - b);
  return first + second;
};

// const sumTwoSmallestNumbers = (numbers) => {
//   let num = numbers.sort((a, b) => a - b);
//   let highestIndex = num.length - 1;
//   console.log(num);
//   let secondHighest = highestIndex - 1;
//   return num[highestIndex] + num[secondHighest];
// };

const res = sumTwoSmallestNumbers([19, 5, 42, 2, 77, 100]);
console.log(res);
