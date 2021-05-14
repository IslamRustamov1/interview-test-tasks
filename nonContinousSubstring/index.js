String.prototype.isNonContinousSubstring = function (arg0) {
  const splitString = String(this).split('');

  let counter = 0;

  splitString.forEach(char => {
    if (counter < arg0.length && char === arg0[counter]) {
      counter += 1;
    }
  })

  return counter === arg0.length;
};

console.log('abcdefg'.isNonContinousSubstring('beg'));
console.log('abcadebabdeb'.isNonContinousSubstring('baadb'));
console.log('abcadebabdeb'.isNonContinousSubstring('baaddb'));

