function showSalary(users, age) {
  let str = "";
  const filtered = users.filter((item) => item["age"] <= age);
  const maped = filtered.map((item) => `${item["name"]}, ${item["balance"]}`);
  for (let i = 0; i <= maped.length - 1; i++) {
    i !== maped.length - 1 ? (str += `${maped[i]}\n`) : (str += `${maped[i]}`);
  }
  return str;
}
