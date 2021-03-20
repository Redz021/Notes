function count(str) {
  str = str.replace(/\s+/g, '').split('')
  let obj = {}
  for (let item of str) {
    if (obj.hasOwnProperty(item)) {
      obj[item] = obj[item] + 1
    } else {
      obj[item] = 1
    }
  }
  return obj
}

console.log(count('hello world'))
