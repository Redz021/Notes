Promise.prototype.all = function (iterators) {
  const promises = Array.from(iterators)
  const len = promises.length
  let count = 0
  let success = []
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          count++
          success[index] = res
          if (count == len) {
            resolve(success)
          }
        })
        .catch((e) => {
          reject(e)
        })
    })
  })
}
