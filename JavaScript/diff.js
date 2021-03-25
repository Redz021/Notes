function diff(oldArr, newArr) {
  let reg = /(\d)\-(\w+)/
  let m = new Map()
  for (let item of oldArr) {
    let temp = item.match(reg)
    m.set(temp[1], temp[2])
  }
  let newm = new Map()
  for (let item of newArr) {
    let temp = item.match(reg)
    newm.set(temp[1], temp[2])
  }
  let res = []
  if (oldArr.length > newArr.length) {
    for (let key of m.keys()) {
      if (newm.has(key)) {
        if (newm.get(key) !== m.get(key)) {
          res.push(`modify-${key}`)
        }
      } else {
        res.push(`del-${key}`)
      }
    }
  } else {
    for (let key of newm.keys()) {
      if (m.has(key)) {
        if (newm.get(key) !== m.get(key)) {
          res.push(`modify-${key}`)
        }
      } else {
        res.push(`add-${key}`)
      }
    }
  }
  return res.sort((a, b) => a - b)
}

console.log(diff(['1-a', '2-b', '3-c'], ['1-a', '2-bb', '3-c']))
