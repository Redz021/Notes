//add(1)(2)(3)(4)() = 10
//add(1)() = 1
function add(...args) {
  let sum = [...args]
  let temp = function (...innerArgs) {
    if (!innerArgs.length) {
      return sum.reduce((a, b) => a + b)
    } else {
      sum = sum.concat(innerArgs)
      return temp
    }
  }
  return temp
}

console.log(add(1)(2)(3)())
