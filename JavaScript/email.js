function isAvailableEmail(sEmail) {
  let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  return reg.test(sEmail)
}

console.log(isAvailableEmail('frontend@nowcoder.com.cn'))
