function flatten(arr) {
  let res = []
  for (let item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item))
    } else {
      res.push(item)
    }
  }
  return res
}

console.log(flatten([1, 2, 3, [4, 5, [6, 7, 8, 9], 10, 11], 12]))
