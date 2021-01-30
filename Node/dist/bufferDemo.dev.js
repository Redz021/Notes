"use strict";

//创建一个长度为10，且用0填充的Buffer
var buf1 = Buffer.alloc(10); //创建一个长度为10，且用0x1填充的Buffer

var buf2 = Buffer.alloc(10, 1); //创建一个长度为10，且未初始化的Buffer
//比调用Buffer.alloc()更快
//但返回的Buffer实例可能包含旧数据
//因此需要使用fill()或write()重写

var buf3 = Buffer.allocUnsafe(10); //创建一个包含[0x1, 0x2, 0x3]的Buffer

var buf4 = Buffer.from([1, 2, 3]); //创建一个包含UTF-8字节[0x74, 0xc3, 0xa9, 0x73, 0x74]的Buffer

var buf5 = Buffer.from('tést'); // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer

var buf6 = Buffer.from('tést', 'latin1');