function iterate(obj) {
  let res = []
  for (let [key, val] of Object.entries(obj)) {
    if (obj.hasOwnProperty(key)) {
      res.push(`${key}: ${val}`)
    }
  }
  return res
}

var C = function () {
  this.foo = 'bar'
  this.baz = 'bim'
}
C.prototype.bop = 'bip'
console.log(iterate(new C()))
