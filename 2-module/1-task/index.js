function sumSalary(salaries) {
  let result = 0;
  for (let k in salaries) {
    isFinite(salaries[k]) && !isNaN(salaries[k])
      ? (result += salaries[k])
      : result;
  }
  return result;
}
