Promise.prototype.all = function (iterators) {
  const promises = Array.from(iterators)
  const len = promises.length

  let count = 0 //fulfilled的promise数量
  let result = [] //fulfilled的promise

  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      //对传入的promise进行遍历
      Promise.resolve(item) //获得item的状态
        .then((res) => {
          count++
          result[index] = res
          if (count === len) {
            resolve(result)
          }
        })
        .catch((err) => reject(err))
    })
  })
}
