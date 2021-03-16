function fun1(callback) {
  setTimeout(() => {
    console.log('1')
    callback()
  }, 300)
}

function fun2(callback) {
  setTimeout(() => {
    console.log('2')
    callback()
  }, 250)
}

function fun3(callback) {
  setTimeout(() => {
    console.log('3')
    callback()
  }, 150)
}

function queue(list, count) {
  //补全函数
}

queue([fun1, fun2, fun3], 2) //2,1,3
