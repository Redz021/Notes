let promise = new Promise((res, rej) => {
  if (10 % 2 == 0) {
    res('Success')
  } else {
    rej(new Error('Error:eeee'))
  }
})
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

let getJSON = (url) => {
  let fn = new Promise((resolve, reject) => {
    let client = new XMLHttpRequest()
    client.open('GET', url)
    client.onreadystatechange = handler
    client.responseType = 'json'
    client.setRequestHeader('Accept', 'application/json')
    client.send()

    function handler() {
      if (this.readyState !== 4) {
        return
      }
      if (this.status == 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
  })
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
  return fn
}
// getJSON('http://47.97.206.40:3000/api/student')

//Promise.all()  参数：具有Iterator接口
let promises = [2, 3, 4, 5, 6].map((val, index, arr) => {
  return getJSON(`/post/${val}.json`)
})
Promise.all(promises)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
//只有参数中的promise全部为fulfilled时，Promise.all()才会变为fulfilled
//只要参数中有一个promise状态变为rejected，Promise.all()的状态就变为rejected，第一个rejected的promise的返回值会传给Promise.all()的回调函数

//Promise.race() 参数同上
Promise.race(promises)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
//只要参数中有一个promise的状态发生改变，Promise.race()的状态随之改变，第一个改变状态的promise的返回值传给Promise.race()的回调函数
