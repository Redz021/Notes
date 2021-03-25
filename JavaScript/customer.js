function customerTime(num, arr) {
  let timeSum = 0
  let lastLeave = 0
  let customerCount = num
  while (customerCount--) {
    let line = arr[arr.length - customerCount - 1]
    let arrive = parseInt(line[0])
    let duration = parseInt(line[1])
    if (arrive > lastLeave) {
      timeSum += duration
      lastLeave = arrive + duration
    } else {
      timeSum += lastLeave - arrive + duration
      lastLeave += duration
    }
  }
  return timeSum
}

console.log(
  customerTime(3, [
    [1, 2],
    [2, 5],
    [4, 3],
  ])
)
