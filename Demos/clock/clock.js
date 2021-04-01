function showtime() {
  let now = new Date()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()
  hour = formatTime(hour)
  minute = formatTime(minute)
  second = formatTime(second)
  return `${hour}:${minute}:${second}`
}
function formatTime(num) {
  if (num < 10) {
    num = '0' + num
  }
  return num
}
let textList = document.querySelectorAll('text')

setInterval(() => {
  let time = showtime()
  for (let item of textList) {
    item.innerHTML = time
  }
}, 1000)
