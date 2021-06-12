const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let lookup = {};
  for (let i = 0; i < str1.length; i++) {
    const str = str1[i];
    lookup[str] = (lookup[str] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let strNew = str2[i];
    if (!lookup[strNew]) {
      return false;
    } else {
      lookup[strNew] -= 1;
    }
  }

  console.log(lookup);
  return true;
};

console.log(validAnagram('anagram', 'nagaram'));
