function checkSpam(str) {
  const spamChecker =
    str.toLowerCase().includes("xxx") || str.toLowerCase().includes("1xbet");
  return spamChecker;
}
