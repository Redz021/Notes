// 螺旋输出矩阵内容
function spiralOrder(matrix) {
  let res = []
  while (matrix.length) {
    res = res.concat(matrix.shift())
    if (!matrix.length) break
    if (matrix[0].length === 1) {
      while (matrix.length) {
        res = res.concat(matrix.shift())
      }
      break
    } else {
      for (let item of matrix) {
        res.push(item.pop())
      }
    }
    res = res.concat(matrix.pop().reverse())
    if (!matrix.length) break
    if (matrix[matrix.length - 1].length === 1) {
      while (matrix.length) {
        res = res.concat(matrix.pop())
      }
      break
    } else {
      for (let i = matrix.length - 1; i >= 0; i--) {
        res.push(matrix[i].shift())
      }
    }
  }
  return res
}

let arr = [
  [1, 2, 3, 4, 5],
  [12, 13, 14, 15, 6],
  [11, 10, 9, 8, 7],
]

console.log(spiralOrder(arr))
