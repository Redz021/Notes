//input: [[9, 10],[1, 4],[3, 6],[8, 12]]
//output: [[1, 6], [8, 12]]

function temp(arr) {
  arr.sort((a, b) => a[0] - b[0])
  let res = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] > res[res.length - 1][1]) {
      res.push(arr[i])
    } else {
      if (arr[i][1] <= res[res.length - 1][1]) continue
      else {
        res[res.length - 1][1] = arr[i][1]
      }
    }
  }
  return res
}

console.log(
  temp([
    [9, 10],
    [1, 4],
    [3, 6],
    [8, 12],
  ])
)
