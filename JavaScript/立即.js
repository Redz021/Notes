var a = 10
;(function () {
  console.log(a)
  a = 5
  var a = 20
  console.log(this.a)
  console.log(a)
})()
