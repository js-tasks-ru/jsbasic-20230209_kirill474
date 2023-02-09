function camelize(str) {
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
  return str
    .split("-")
    .map((item, i) => (i ? capitalize(item) : item))
    .join("");
}
