const allSettled = async (promises) => {
  const result = [];

  for (const promise of promises) {
    try {
      const resolvedValue = await promise;
      result.push(resolvedValue);
    } catch (error) {
      result.push(error);
    }
  }

  return result;
};

const promise1 = Promise.resolve(1);
const promise2 = Promise.reject('Rejected promise');
const promise3 = Promise.resolve(3);

allSettled([promise1, promise2, promise3]).then(console.log);
