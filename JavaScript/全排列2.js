//input: [['A','B'], ['a','b'], [1, 2]]
//output: ['Aa1','Aa2','Ab1','Ab2','Ba1','Ba2','Bb1','Bb2']

function test(arr) {
  let res = ['']
  for (let i = 0; i < arr.length; i++) {
    let temp = []
    for (let j = 0; j < res.length; j++) {
      let head = res[j]
      for (let k = 0; k < arr[i].length; k++) {
        let tail = arr[i][k]
        temp.push(head + tail)
      }
    }
    res = temp
  }
  return res
}

console.log(
  test([
    ['A', 'B'],
    ['a', 'b'],
    [1, 2],
  ])
)
