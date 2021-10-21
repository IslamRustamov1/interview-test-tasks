const words = ['elo', 'ole', 'loe', 'es', 'is', 'se'];

const func = (words) => {
  const resultObj = words.reduce((acc, word) => {
    const formattedWord = word.toLowerCase().split('').sort().join('');

    if (acc[formattedWord]) {
      acc[formattedWord].push(word);
    } else {
      acc[formattedWord] = [word];
    }

    return acc;
  }, {});

  return Object.values(resultObj).map(item => item).filter(item => item.length !== 1);
};

console.log(func(words))

