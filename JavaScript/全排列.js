function test(str) {
  let res = []
  if (str.length === 1) return [str]
  else {
    for (let i = 0; i < str.length; i++) {
      let head = str[i]
      let tail = str.slice(0, i) + str.slice(i + 1, str.length)
      let tails = test(tail)
      for (let j = 0; j < tails.length; j++) {
        let temp = head + tails[j]
        if (res.indexOf(temp) === -1) {
          res.push(temp)
        }
      }
    }
  }
  return res
}

console.log(test('abb'))
