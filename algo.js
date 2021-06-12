//a function that can detect if a string has  palligrum

const findPallegrum = (arr) => {
  let strLen = arr.length;
  let chars = {};
  let oddCount = 0;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (!chars[el]) {
      chars[el] = 1;
      oddCount++;
    } else {
      chars[el]++;
      chars[el] % 2 === 0 ? oddCount-- : oddCount++;
    }
  }

  if (strLen % 2 !== 0) {
    return oddCount > 1 ? false : true;
  } else {
    return oddCount > 0 ? false : true;
  }
};

console.log(findPallegrum('amadmr'));
