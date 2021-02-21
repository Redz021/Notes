"use strict";

var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
  console.log("连接成功");
  eventEmitter.emit("data_recieved");
};

eventEmitter.on("connection", connectHandler);
eventEmitter.on("data_recieved", function () {
  console.log("数据接收成功");
});
eventEmitter.emit("connection");
console.log("执行完毕");