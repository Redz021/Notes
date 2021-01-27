"use strict";

var fs = require("fs");

var data = fs.readFileSync('../hello.js');
console.log(data.toString());
console.log("over");