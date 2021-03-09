"use strict";

var promise = new Promise(function (res, rej) {
  if (10 % 2 == 0) {
    res('Success');
  } else {
    rej('Error');
  }
}).then(function (res) {
  return console.log(res);
})["catch"](function (err) {
  console.log(err);
});