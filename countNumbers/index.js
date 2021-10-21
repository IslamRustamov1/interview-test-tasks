const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [2, 5];

const func = (arr1, arr2) => {
  arr1 = arr1.sort((a, b) => a - b);

  return arr2.reduce((acc, numArr2) => {
    const indexArr1 = arr1.findIndex(numArr1 => numArr1 > numArr2);

    if (indexArr1 !== -1) {
      acc.push(arr1.length - indexArr1);
    } else {
      acc.push(0);
    }
    return acc;
  }, []);
};

console.log(func(arr1, arr2));
