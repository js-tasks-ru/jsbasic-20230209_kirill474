function getMinMax(str) {
  const string = str.split(" ");
  const myArray = string
    .filter((item) => !isNaN(item))
    .map((item) => Number(item));
  const sorted = myArray.sort((a, b) => a - b);

  const result = (a, b) => {
    let obj = {};
    obj.max = b;
    obj.min = a;
    return obj;
  };
  return result(sorted[0], sorted.at(-1));
}
