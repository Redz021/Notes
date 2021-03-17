//add(1)(2)(3)(4)() = 10
//add(1)() = 1
function add(...arg) {
  let sum = [...arg]
  let temp = function (...arg2) {
    if (!arg2.length) {
      return sum.reduce((a, b) => a + b)
    } else {
      sum = sum.concat(arg2)
      return temp
    }
  }
  return temp
}

let res = add(1)(2)(3)(4)()
let res2 = add(1)()
console.log(res, res2)
