export const generateArr = (length) => {
  const arr = [];
  while (arr.length < length) {
    const r = Math.floor(Math.random() * length / 2) + 1;

    const countDuplicate = arr.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});

    if (!countDuplicate[r] || countDuplicate[r] < 2) {
      arr.push(r);
    }
  }
  return arr;
};
