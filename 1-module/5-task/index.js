function truncate(str, maxlength) {
  const lengthCase = str.length > maxlength;
  const replacedPart = lengthCase ? str.substring(maxlength - 1) : str;
  return lengthCase ? str.replace(replacedPart, "…") : str;
}
