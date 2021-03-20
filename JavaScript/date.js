function formatDate(dateData, format) {
  let year = String(dateData.getFullYear())
  let month = String(dateData.getMonth() + 1)
  let date = String(dateData.getDate())
  let day = ['日', '一', '二', '三', '四', '五', '六'][dateData.getDay()]
  let hour = dateData.getHours()
  let minute = String(dateData.getMinutes())
  let second = String(dateData.getSeconds())

  let str = format.replace(/w/, day)
  let temp = str.match(/y{2,4}/)[0]
  if (temp.length == 2) {
    str = str.replace(temp, year.substring(2, 4))
  } else {
    str = str.replace(temp, year)
  }
  temp = str.match(/M{1,2}/)[0]
  if (temp.length == 1) {
    str = str.replace(temp, month)
  } else {
    if (month.length == 1) {
      str = str.replace(temp, '0' + month)
    } else {
      str = str.replace(temp, month)
    }
  }
  temp = str.match(/d{1,2}/)[0]
  if (temp.length == 1) {
    str = str.replace(temp, date)
  } else {
    if (date.length == 1) {
      str = str.replace(temp, '0' + date)
    } else {
      str = str.replace(temp, date)
    }
  }
  temp = str.match(/H{1,2}/i)[0]
  if (temp[0] === 'H') {
    if (temp.length == 1) {
      str = str.replace(temp, hour)
    } else {
      if (String(hour).length == 1) {
        str = str.replace(temp, '0' + String(hour))
      } else {
        str = str.replace(temp, hour)
      }
    }
  } else {
    hour = hour % 12
    if (temp.length == 1) {
      str = str.replace(temp, hour)
    } else {
      if (String(hour).length == 1) {
        str = str.replace(temp, '0' + String(hour))
      } else {
        str = str.replace(temp, hour)
      }
    }
  }
  temp = str.match(/m{1,2}/)[0]
  if (temp.length == 1) {
    str = str.replace(temp, minute)
  } else {
    if (minute.length == 1) {
      str = str.replace(temp, '0' + minute)
    } else {
      str = str.replace(temp, minute)
    }
  }
  temp = str.match(/s{1,2}/)[0]
  if (temp.length == 1) {
    str = str.replace(temp, second)
  } else {
    if (second.length == 1) {
      str = str.replace(temp, '0' + second)
    } else {
      str = str.replace(temp, second)
    }
  }
  return str
}

console.log(
  formatDate(
    new Date(1409894060000 + new Date().getTimezoneOffset() * 60 * 1000),
    'yy-M-d hh:m:s 星期w'
  )
)
