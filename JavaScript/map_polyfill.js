Array.prototype.myMap = function (func, thisarg) {
  const res = []
  const arr = this
  arr.reduce((acc, cur, index, arr) => {
    res.push(func.call(this, cur, index, arr))
    console.log(acc, cur, index, arr)
  }, [])
  return res
}

console.log(
  [1, 2, 3, 4, 5, 6].myMap((item) => {
    return item * 2
  })
)
