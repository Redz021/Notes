# ['1','2','3'].map(parseInt)

```javascript
['10','10','10','10','10'].map(parseInt);
//[10,NaN,2,3,4]
```

> `parseInt(string, radix)`解析一个字符串并返回一个指定基数的十进制整数，`radix`是2-36之间的整数，表示被解析字符串的基数。

```javascript
['1','2','3'].map(parseInt);
```

对于每个迭代`map`，`parseInt()`传递两个参数：**字符串**和**基数**，所以实际执行的代码是

```javascript
['1','2','3'].map((item, index) => {
    return parseInt(item, index);
});
```

即返回值为

```javascript
parseInt('1', 0);//1
parseInt('2', 1);//NaN
parseInt('3', 2);//NaN 3不是二进制
```

# ES6新增数组方法

## forEach

`forEach()`会遍历数组, 循环体内没有返回值,`forEach()`循环不会改变原来数组的内容, `forEach()`有三个参数, 第一个参数是当前元素, 第二个参数是当前元素的索引, 第三个参数是当前元素所属的数组.

```js
let array = [1, 2, 3, 4];
array.forEach((item, index, arr) => {
　　console.log(item);
});
```

`forEach()`的用法大概就是这样的, 不过不知道各位发没发现一个问题, `forEach()`不能跳出循环, 我说的跳出循环是跳出整个循环而不是跳出当前的循环, 口说无凭, 直接上代码.

```js
let array = [1, 2, 3, 4, 5];
array.forEach((item) => {
    if (item > 2) {
        return;
    }
    console.log(item);
});
```

各位, 上面的代码会输出啥呢?
答案是: 1 2
这时候有人就会说了, 这不是跳出循环了吗, 其实并不是, 它仍然把数组挨个遍历了一遍, 把输出换个位置我们就会发现了.

```js
let array = [1, 2, 3, 4, 5];
array.forEach((item) => {
    console.log(item);
    if (item > 2) {
        return;
    }
});
```

这回怎么样, 输出了 1 2 3 4 5吧.
看过了上面两段代码之后, 不难发现, 在`forEach()`循环体里写return, 只是能跳出当前循环去执行下一次循环,并不能跳出整个循环.
再说说什么叫`forEach()`循环没有返回值, 这个问题在看过接下来的map循环之后就会明白了.

## map

`map()`的主要作用, 其实是创建一个新的数组, `map()`的参数和`forEach()`是一样的, 这里就不在多说了, 直接上例子.

```js
let array = [1, 2, 3, 4 ,5];
let temp = array.map((item, index, arr) => {
    return item + 1;
});
console.log(temp);
console.log(array);
```

猜猜输出的`temp`和`arr`的值都是什么
temp: [2, 3 ,4, 5, 6]
arr: [1, 2, 3, 4, 5]
各位, 到这里应该明白`map()`和`forEach()`有什么区别了吧, 使用map()遍历数组, 可以返回一个新数组, 并且不会改变原数组里的内容.
当然了, `map()`也可以这么用, 直接把数组里的元素都转成字符串.

```js
let temp = array.map(String);
```

## filter

接下来再说说`filter()`, `filter()`参数和`forEach()`也是一样的, `filter()`主要是过滤的, 用来过滤数组中不满足条件的元素, 把满足条件的元素放到新的数组里, 并且不会改变原数组.
怎么用呢, 直接上代码.

```js
let array = [1, 2, 3, 4, 5];
let temp = array.filter((item, index, arr) => {
    return item > 3;    
});
console.log(temp);
console.log(array);
```

会输出什么呢, `temp`是4, 5, `array`没有变化, 清晰明了吧, 是不是比用`for`循环硬写方便多了.

## every

`every()` 我就不解释入参了, 都一样的, 主要说说`every()`的作用, 它会遍历数组, 在循环体内写条件, 如果每一项都是`true`, 就会返回`true`, 只要有一个是`false`, 就会返回`false`, 下面看看实例代码.

```js
let array = [1, 2, 3, 4, 5];
let bo = array.every((item, index, arr) => {
    return item > 2;
});
console.log(bo);
```

这个输出不用我说了吧, 肯定是`false`啊, 不用再解释了吧.

## some

`some()`又是做什么的呐, 同样, 遍历数组的每一项, 然后根据循环体内的条件去判断, 只要有一个是`true`, 就会停止循环.

```js
let array = [1, 2, 3, 4, 5];
array.some((item, index, arr) => {
    console.log(item);
    return item > 3;
});
```

根据输出的item, 我们可以知道一共循环了多少次.

## reduce

`reduce()`, 官方说明: 接收一个函数作为累加器, 数组中每个值(从左到右)开始缩减, 最终为一个值. 看完这句话, 心里莫名的想说一句 卧槽, '这什么玩意'. 其实说白了, `reduce()`接收的那个函数就是回调函数, 回调函数调用数组里的每一个元素, 直到循环结束.
`reduce()`跟其他几个方法不一样, 它有4个参数, 按顺序分别是 上一次的值, 当前的值, 当前值的索引, 数组. 参数介绍完毕, 直接看例子.
假如, 有一个数组, 里面的元素都是数字, 现在要计算数字的和, 正常情况就直接循环数组, 然后弄个中间变量挨个加了吧, 但是用了`reduce()`就省事儿多了

```js
let array = [1, 2, 3, 4, 5];
let total = array.reduce((a, b) => {
    return a + b;
});
console.log(total);     // 15
```

# 函数防抖 函数节流

## setTimeout()

`setTimeout()`方法设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码。

返回值`timeoutID`是一个正整数，表示定时器的编号。这个值可以传递给`clearTimeout()`来取消该定时器。

例：在一个网页中运行如下脚本，并且点击一次页面。一秒钟后你会看见弹出一条信息。如果你在一秒内不停点击页面，弹出框将不再出现。

```javascript
var alarm = {
  remind: function(aMessage) {
    alert(aMessage);
    delete this.timeoutID;
  },

  setup: function() {
    this.cancel();
    var self = this;
    this.timeoutID = window.setTimeout(function(msg) {self.remind(msg);}, 1000, "Wake up!");
  },

  cancel: function() {
    if(typeof this.timeoutID == "number") {
      window.clearTimeout(this.timeoutID);
      delete this.timeoutID;
    }
  }
};
window.onclick = function() { alarm.setup() };
```

## 概念

**函数防抖(debounce)：**触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。

**函数节流(throttle)：**高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率。

**函数节流(throttle)**与**函数防抖(debounce)**都是为了限制函数的执行频次，以优化函数触发频率过高导致的响应速度跟不上触发频率，出现延迟，假死或卡顿的现象。

## 函数防抖

- 实现方式：每次触发事件时设置一个延迟调用方法，并且取消之前的延时调用方法
- 缺点：如果事件在规定的时间间隔内被不断的触发，则调用方法会被不断的延迟

```javascript
//防抖debounce代码：
function debounce(fn,delay) {
    var timeout = null; // 创建一个标记用来存放定时器的返回值
    return function (e) {
        // 每当用户输入的时候把前一个 setTimeout clear 掉
        clearTimeout(timeout); 
        // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    };
}
// 处理函数
function handle() {
    console.log('防抖：', Math.random());
}
        
//滚动事件
window.addEventListener('scroll', debounce(handle,500));
```

## 函数节流

- 实现方式：每次触发事件时，如果当前有等待执行的延时函数，则直接return

```javascript
//节流throttle代码：
function throttle(fn,delay) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
         // 在函数开头判断标记是否为true，不为true则return
        if (!canRun) return;
         // 立即设置为false
        canRun = false;
        // 将外部传入的函数的执行放在setTimeout中
        setTimeout(() => { 
        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
        // 当定时器没有执行的时候标记永远是false，在开头被return掉
            fn.apply(this, arguments);
            canRun = true;
        }, delay);
    };
}
 
function sayHi(e) {
    console.log('节流：', e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi,500));
```

> 浏览器在处理setTimeout和setInterval时，有最小时间间隔。
> setTimeout的最短时间间隔是4毫秒；
> setInterval的最短间隔时间是10毫秒，也就是说，小于10毫秒的时间间隔会被调整到10毫秒。
> 事实上，未优化时，scroll事件频繁触发的时间间隔也是这个最小时间间隔。
> 也就是说，当我们在debounce函数中的间隔事件设置不恰当（小于这个最小时间间隔），会使debounce无效。

**总结：**
**函数防抖**：将多次操作合并为一次操作进行。原理是维护一个计时器，规定在delay时间后触发函数，但是在delay时间内再次触发的话，就会取消之前的计时器而重新设置。这样一来，只有最后一次操作能被触发。

**函数节流**：使得一定时间内只触发一次函数。原理是通过判断是否有延迟调用函数未执行。

**区别**： 函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。

# Set Map WeakSet WeakMap

## Set

* 成员唯一，无序，不重复
* [value, value] 键，值相等，或者说没有键
* 可以遍历，方法有add，delete，has

[MDN定义](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)

## WeakSet

* 成员都是对象
* 成员都是弱引用，可以被垃圾回收机制回收，可以用来保存节点，不容易造成内存泄漏
* 不能遍历，方法有add，delete，has

[MDN定义](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

## Map

* 本质上是键值对的集合，类似集合
* 可以遍历，方法很多，可以与各种数据格式转换

[MDN定义](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

## WeakMap

* 只接受对象作为键名，null除外，不接受其他类型
* 键名是弱引用，键值任意，键名指向的对象可以被回收，此时键名无效
* 不能遍历，方法有get，set，has，delete

[MDN定义](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

# 如何判断数组

## Object.prototype.toString.call()

Object中的`toString`方法返回`[object type]`，type为对象的类型。除了Object类型以外的对象使用`toString`方法时会直接返回内容的字符串，所以需要使用call或apply方法改变`toString`方法的执行上下文

```javascript
const an = ['hello', 'an'];
an.toString();//'hello, an'
Object.prototype.toString.call(an);//'[object Array]'
```

这种方法对于所有基本数据类型都能判断，包括null和undefined

## instanceof

通过判断对象的原型链中是不是能找到类型的prototype

```javascript
[] instanceof Array;//true
```

## Array.isArray()

ES5新增

用于判断对象是否为数组

不存在Array.isArray()时可使用Object.prototype.toString.call()

```javascript
if(!Array.isArray){
    Array.isArray = function(arg){
        return Object.prototype.toString.call(arg) === '[object Array]'; 
    }
}
```

# ES5 ES6定义对象的区别

## `class`声明提升，但不会初始化赋值，`foo`进入暂时性死区，类似于`let`,`const`声明变量

```javascript
const bar = new Bar();//ok
function Bar(){
    this.bar = 42;
}
const foo = new Foo();//ReferenceError: Foo is not defined
class Foo{
    constructor(){
        this.foo = 42;
    }
}
```

## `class`声明内部会启用严格模式

```javascript
//引用一个未声明的变量
function Bar(){
    baz = 42;//ok
}
const bar = new Bar();

class Foo{
    constructor(){
        fol = 42;//ReferenceError: fol is not defined
    }
}
const foo = new Foo();
```

## `class`中的所有方法都是不可枚举的

```javascript
function Bar(){
    this.bar = 42;
}
Bar.answer = function(){
    return 42;
};
Bar.prototype.print = function(){
    console.log(this.bar);
};
const barKeys = Object.keys(bar);//['answer']
const barProtoKeys = Object.keys(Bar.prototype);//['print']

class Foo{
    constructor(){
 		this.foo = 42;
    }
    static answer(){
        return 42;
    }
    print(){
        console.log(this.foo);
    }
}
const fooKeys = Object.keys(Foo);//[]
const fooProtoKeys = Object.keys(Foo.prototype);//[]
```

## `class`中的所有方法都没有原型对象prototype，不能使用`new`来调用

```javascript
function Bar(){
    this.bar = 42;
}
Bar.prototype.print = function(){
    console.log(this.bar);
};
const bar = new Bar();
const barPrint = new bar.print();//ok

class Foo{
    constructor(){
        this.foo = 42;
    }
    print(){
        console.log(this.foo);
    }
}
const foo = new Foo();
const fooPrint = new foo.print();//TypeError: foo.print is not a constructor
```

## 必须使用`new`调用`class`

```javascript
function Bar(){
    this.bar = 42;
}
const bar = Bar();//ok

class Foo{
    constructor(){
        this.foo = 42;
    }
}
const foo = Foo();//TypeError: class constructor Foo cannot be invoked without 'new'
```

## `class`内部无法重写类名

```javascript
function Bar(){
    Bar = 'Baz';//ok
    this.bar = 42;
}
const bar = new Bar();
//Bar: 'Baz'
//bar: Bar{bar: 42}

class Foo{
    constructor(){
        this.foo = 42;
        Foo = 'Fol';//TypeError: Assignment to constant variable
    }
}
const foo = new Foo();
Foo = 'Fol'//ok
```

# 全局作用域中，用const和let声明的变量位置？

ES5中，顶层对象的属性和全局变量是等价的，var和function命令声明的全局变量自然也是顶层对象

```javascript
var a = 12;
function f(){};
console.log(window.a);//12
console.log(window.f);//f(){}
```

ES6规定，var和function声明的全局变量依旧是顶层对象的属性，但let、class、const声明的全局变量，不属于顶层对象的属性

```javascript
let aa = 1;
const bb = 2;
console.log(window.aa);//undefined
console.log(window.bb);//undefined
```

用let和const声明的全局变量并没有在全局对象中，只是一个块级作用域(Script)中

在定义变量的块级作用域中即可获取变量

```javascript
let aa = 1;
const bb = 2;
console.log(aa);//1
console.log(bb);//2
```

const和let会生成块级作用域，可以理解为

```js
let a = 10;
const b = 20;
//相当于：
(function(){
    var a = 10;
    var b = 20;
})()
```

# 事件绑定

* 嵌入DOM

  耦合高，不利于维护

```html
<button onclick="func()">
    按钮
</button>
```

* 直接绑定

  只能绑定一个函数

```js
btn.onclick = function(){}
```

* 事件监听

  可绑定多个函数，既可设置捕获事件，也可设置冒泡事件

```js
btn.addEventListener('click', function(){})
```

# 事件委托

事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件

所有用到按钮的事件（多数鼠标事件好键盘事件）都适合采用事件委托技术

使用事件委托可以节省内存

```html
<ul>
    <li>苹果</li>
    <li>香蕉</li>
    <li>橘子</li>
</ul>
```

```js
//good
document.querySelector('ul').onclick = (event) => {
    let target = event.target;
    if(target.nodeName === 'LI'){
        console.log(target.innerHTML);
    }
}
//bad
document.querySelectorAll('li').forEach((e) => {
    e.onclick = function(){
        console.log(this.innerHTML);
    }
})
```

# 原型链

例：

```javascript
let obj = { name: 'foo' }
obj.toString() //foo
```

当执行`obj.toString()`时，JavaScript引擎将会：

1. 看看 `obj` 对象本身有没有 `toString` 属性。没有就走到下一步。

2. 看看 `obj.__proto__` 对象有没有 `toString` 属性，发现 `obj.__proto__` 有 `toString` 属性，于是找到了，所以 `obj.toString` 实际上就是第 2 步中找到的 `obj.__proto__.toString`。

可以想象，

3. 如果 `obj.__proto__` 没有，那么浏览器会继续查看 `obj.__proto__.__proto__`

4. 如果 `obj.__proto__.__proto__` 也没有，那么浏览器会继续查看 `obj.__proto__.__proto__.__proto__`

5. 直到找到 `toString` 或者 `__proto__` 为 `null`。

这个搜索过程，是连着由 `__proto__` 组成的链一直走的。即原型链。

## instanceof原理

instanceof主要用于判断某个实例是否属于某个类型，也可用于判断某个实例是否是其父类型或者祖先类型的实例。

instanceof 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可。因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，如果查找失败，则会返回 false。

```js
function instanceof(left, right) {
    const rightVal = right.prototype
    const leftVal = left.__proto__
    // 若找不到就到一直循环到父类型或祖类型
    while(true) {
        if (leftVal === null) {
            return false
        }
        if (leftVal === rightVal) {
            return true
        }
        leftVal = leftVal.__proto__ // 获取祖类型的__proto__
    }
}
```

# 闭包

闭包指有权访问另一个函数作用域中的变量的函数



例：有一个函数，参数是一个函数，返回值也是一个函数，返回的函数功能和入参的函数相似，但这个函数只能执行3次，再次执行无效，如何实现？

```js
function sayHi(){
    console.log('Hi');
}

function threeTimes(fn){
    let times = 0;
    return () => {
        if(times++ < 3){
            fn();
        }
    }
}

const newFn = threeTimes(sayHi);
```

# JavaScript 严格模式下有哪些不同？

* 不允许不使用 var 关键字去创建全局变量，抛出 ReferenceError
* 不允许对变量使用 delete 操作符，抛 ReferenceError
* 不可对对象的只读属性赋值，不可对对象的不可配置属性使用 delete 操作符，不可为不可拓展的对象添加属性，均抛 TypeError
* 对象属性名必须唯一
* 函数中不可有重名参数
* 在函数内部对修改参数不会反映到 arguments 中
* 淘汰 arguments.callee 和 arguments.caller
* 不可在 if 内部声明函数
* 抛弃 with 语句

# new操作符

**`new`** 关键字会进行如下的操作：

1. 创建一个空的简单JavaScript对象（即`{}`）；
2. 链接该对象（设置该对象的**constructor**）到另一个对象 ；
3. 将步骤1新创建的对象作为`this`的上下文 ；
4. 如果该函数没有返回对象，则返回`this`。

（译注：关于对象的 **constructor**，参见 **Object.prototype.constructor**）

创建一个用户自定义的对象需要两步：

1. 通过编写函数来定义对象类型。
2. 通过 `new` 来创建对象实例。

创建一个对象类型，需要创建一个指定其名称和属性的函数；对象的属性可以指向其他对象，看下面的例子：

当代码 `new Foo(...)` 执行时，会发生以下事情：

1. 一个继承自 `Foo.prototype` 的新对象被创建。
2. 使用指定的参数调用构造函数 *`Foo`*，并将 `this` 绑定到新创建的对象。`new Foo` 等同于 *`new Foo`*`()`，也就是没有指定参数列表，*`Foo`* 不带任何参数调用的情况。
3. 由构造函数返回的对象就是 `new` 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。（一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）

# Ajax

AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。

AJAX 不是新的编程语言，而是一种使用现有标准的新方法。

AJAX 最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。

AJAX 不需要任何浏览器插件，但需要用户允许JavaScript在浏览器上执行。

## ajax优缺点

优点：

* 交互性更好，来自服务器的新内容可以动态更改，无需重新加载整个页面
* 减少与服务器的连接，因为脚本和样式只需要被请求一次
* 状态可以维护在一个页面上，JavaScript变量和DOM状态将得到保持，因为主容器页面未被重新加载
* 基本上包括大部分SPA的优点

缺点：

* 动态网页很难收藏
* 如果JavaScript已在浏览器中被禁用，则不起作用
* 有些网络爬虫不执行JavaScript，也不会看到JavaScript加载的内容
* 基本上包括大部分SPA的缺点，搜索引擎优化比较难

## Ajax与Fetch区别

* ajax使用XMLHttpRequest对象发起，但是用起来很麻烦，所以ES6新规范有了fetch，fetch是一个请求，不用想ajax一样写一大堆代码
* 使用fetch无法取消一个请求，因为fetch基于Promise，而Promise无法做到这一点
* 在默认情况下，fetch不会接受或者发送cookies
* fetch无法原生检测请求的进度，XMLHttpRequest可以
* fetch支队网络请求报错，对400，500都当做成功的请求，需要封装去处理
* fetch由于是ES6规范，兼容性比不上XMLHttpRequest

# 创建对象的方式

```js
//字面量
let a = {username: "admin"}
//工厂模式
function factory(){
    return {
        username: "admin"
    }
}
//构造函数
function Fn(){
    this.username = "admin";
}
let a = new Fn();
//class
class Fn{
    constructor(){
        this.name = "admin";
    }
}
let a = new Fn();
```

# new操作符具体做了什么

**题目点评**

考察对new关键的深刻认识，是否对前端知识有专研，如果没有专研的人，肯定说创建了一个对象，恭喜你面试官知道你是小菜鸟来的，这次面试基本上没有太大的希望了。一定要对new过程的4个步骤非常清楚，这样才能深深地抓住面试官的心！

**题目解析**

先看代码

```javascript
var Func=function(){
};
var func=new Func ();
```

new共经过了4几个阶段

**1、创建一个空对象**

```javascript
var obj=new Object();
```

**2、设置原型链**

```javascript
obj.__proto__= Func.prototype;
```

**3、让Func中的this指向obj，并执行Func的函数体。**

```javascript
var result = Func.call(obj);
```

**4、判断Func的返回值类型：**

如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。

```javascript
if (typeof(result) == "object"){
  func=result;
}
else{
    func=obj;;
}
```

# 改变this的指向

## call apply bind 箭头函数 new

call和apply区别在于传参时参数是一个个传还是以数组方式来传

call apply都是在调用时生效，改变调用者的this指向

> `call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"
```

> `apply()` 方法调用一个具有给定`this`值的函数，以及以一个数组（或类数组对象）的形式提供的参数。

```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2
```

bind不是在调用时生效，而是返回一个新函数

> `bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

```js
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```

箭头函数以外部上下文this为准

new使this指向新创建的对象

## 简述JavaScript中的this

this取值符合以下规则

1. 在调用函数时使用new关键字，函数内的this是一个全新的对象

2. 如果apply，call，bind方法用于调用，创建一个函数，函数内的this就是作为参数传入这些方法时的对象

3. 当函数作为对象里的方法被调用时，函数内的this是调用该函数的对象，比如当`obj.method()`被调用时，函数内的this将绑定到obj对象

4. 如果调用函数不符合上述规则，那么this的值指向全局对象，浏览器环境下this的值指向window对象，但在严格模式下，this的值为undefined

5. 如果符合上述多个规则，则较高的规则(1最高，4最低)将决定this的值
6. 如果该函数是ES2015中的箭头函数，将忽略上述所有规则，this被设置为它被创建时的上下文

#  