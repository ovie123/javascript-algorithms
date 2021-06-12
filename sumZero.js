// O(n^2);
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    for (let j = 0; j < arr.length; j++) {
      const el2 = arr[j];
      if (el + el2 === 0) {
        return [el, el2];
      }
    }
  }
};

console.log(sumZero[(-4, -3, -2, -1, 0, 1, 2, 5)]);
