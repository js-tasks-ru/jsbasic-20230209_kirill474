function getMinMax(str) {
  const string = str.split(" ");
  const myArray = string
    .filter((item) => !isNaN(item))
    .map((item) => Number(item));

  let result = {
    max: Math.max(...myArray),
    min: Math.min(...myArray),
  };
  return result;
}
