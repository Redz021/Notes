function repect(fn, times, wait) {
  return function (arg) {
    let timer = setInterval(function () {
      if (times) {
        fn(arg)
        times--
      } else {
        clearInterval(timer)
      }
    }, wait)
  }
}

const repectFunc = repect(console.log, 4, 3000)
repectFunc('HelloWorld')
