var firstUniqChar = function (s) {
  if (s.length == 1) return s
  for (let i = 0; i < s.length; i++) {
    let sleft = s.slice(0, i)
    let sright = s.slice(i + 1)
    let leftIndex = sleft.indexOf(s[i])
    let rightIndex = sright.indexOf(s[i])
    if (sleft && sright) {
      if (leftIndex == -1 && rightIndex == -1) {
        return s[i]
      }
    } else if (!sleft) {
      if (rightIndex == -1) {
        return s[i]
      }
    } else if (!sright) {
      if (leftIndex == -1) {
        return s[i]
      }
    }
  }
  return ' '
}

firstUniqChar('dddccdbba')
