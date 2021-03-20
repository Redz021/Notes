function getUrlParams(sUrl, sKey) {
  let res = {}
  sUrl.replace(/\??(\w+)\=(\w+)&?/g, function (a, k, v) {
    if (res[k]) {
      res[k] = [...res[k]].concat(v)
    } else {
      res[k] = v
    }
  })
  if (!sKey) {
    return res
  } else {
    return res[sKey] || ''
  }
}

console.log(
  getUrlParams('http://www.nowcoder.com?key=1&key=2&key=3&key=4&test=4#hehe')
)
