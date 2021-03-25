function steps(n) {
  let prev = 0,
    cur = 1
  while (n--) {
    ;[prev, cur] = [cur, prev + cur]
  }
  return cur
}
console.log(steps(7))
