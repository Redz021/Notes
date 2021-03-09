# 原型

## \__proto__

ES5中**[[Prototype]]**在Chrome中的实现。目前所有浏览器均已部署。

1. \__proto__和constructor属性是**对象**独有的。
2. prototype属性是函数独有的，但在JavaScript中函数也是对象，所以函数也有\__proto__和constructor属性。

\_\_proto\_\_属性指向一个对象的原型对象，在访问一个对象的属性时，如果该对象内部不存在这个属性，就会去它的\_\_proto\_\_属性所指的对象中查找，如不存在，则重复这个过程，直到原型链顶端null为止。

ES6不建议不建议使用该属性，使用Object.setPrototyprOf()进行写操作，Object.getPrototypeOf()读，Object.create()生成。

## prototype

prototype是函数所独有的，从一个函数指向一个对象。

它的含义是函数的原型对象，即这个函数创建的实例的原型对象。

作用是包含可以由特定类型的所有实例共享的属性和方法，也就是让函数所实例化的对象们都可以找到公用的属性和方法。

任何函数在创建的时候，会默认同时创建该函数的prototype对象。

## constructor

constructor是prototype对象独有的，从一个对象指向一个函数。

含义是指向该对象的构造函数。

每个对象都有构造函数，Function对象的构造函数为自身，所有函数和对象最终都是由Function构造得来。

```javascript
function Person(){
	this.name;
}
Person.prototype.say=function(){
	console.log("hello");
}
 
var person=new Person();
 
console.log(Person.__proto__);
console.log(Function.prototype);
 
console.log(Person.prototype.__proto__);
console.log(Object.prototype);
 
console.log(person.__proto__);
console.log(Person.prototype);
 
console.log(Person.prototype.constructor);
console.log(Person);
```

# new过程

```javascript
function Person(name, age){
    this.name = name
    this.age = age
}
const person1 = new Person('Tom', 20)
console.log(person1) //Person{name: 'Tom', age: 20}
```

1. 创建一个空对象obj。

   `{}`

2. 将obj的[[Prototype]]属性指向构造函数的原型Person.prototype。

   `{ __proto__ = Person.prototype }`

3. 将构造函数内部的this绑定到新建的对象obj，执行构造函数。

   `{ __proto__ = Person.prototype; name = 'Tom'; age = 20;}`

4. 若构造函数没有返回非原始值（不是引用类型的值），则返回新建的对象obj（默认return this），否则返回引用类型的值。

   `const person1 = { __proto__ = Person.prototype; name = 'Tom'; age = 20;}`

# Promise

## 基本语法

```javascript
Promise((resolve, reject)=>{
    if(true){
        resolve()
    }else{
        reject()
    }
})
.then(val=>val)
.catch(err=>err)
```

## Promise.then()

两个参数：

1. resolved状态时的回调函数
2. rejected状态时的回调函数

不建议在then方法中定义rejected状态的回调函数，应总是使用catch方法。

then方法返回一个新的Promise实例，因此可以链式调用。

## Promise.catch()

`.then(null, rejection)`的别称，用于指定发生错误时的回调函数。

then方法指定的回调函数发生错误也会被catch捕获。

## Promise.all()

参数不一定为数组，但必须有`Iterator`接口。

数组中的实例不是Promise实例的，自动调用`Promise.resolve()`进行转换。

状态取决于两种情况：

1. 所有实例状态均变为fulfilled，all()的状态变为fulfilled，所有实例的返回值组成一个数组，传递给all()的回调函数。
2. 有一个实例变为rejected，all()的状态变为rejected，第一个变为rejected的实例的返回值传递给all()的回调函数。

## Promise.race()

参数同上。

只要有一个实例的状态发生改变，race()的状态随之改变，实例的返回值传递给race()的回调函数。

# Object

## ES5

### Object.defineProperty()

修改属性默认的特性

参数：属性所在的对象、属性名、描述符对象

```javascript
let person = {}
Object.defineProperty(person, 'name', { 
    writable: false, 
    value: 'Tom' 
})
console.log(person.name)//Tom
person.name = 'Jack'
console.log(person.name)//Tom

let book = {
  _year: 2001,
  edition: 1,
}
Object.defineProperty(book, 'year', {
  get: function () {
    return this._year
  },
  set: function (val) {
    if (val > 2001) {
      this._year = val
      this.edition = val - 2001
    }
  },
})
book.year = 2010
console.log(book)
```

描述符对象属性：

1. configurable：是否能通过delete删除属性从而重新定义属性，能否修改属性的特性，能否把属性修改为访问器属性。
2. enumerable：能否通过for-in循环返回属性。
3. writable：能否修改属性的值。（适用于数据属性）
4. value：属性的数据值。（适用于数据属性）
5. get：在读取属性时调用的函数。（适用于访问器属性）
6. set：在写入属性时调用的函数。（适用于访问器属性）

**使用Object.defineProperty()创建新属性时，若不指定，configurable，enumerbale，writable默认值均为false。若调用Object.defineProperty()用于修改已定义的属性则无限制。**

### Object.getPrototypeOf()

获取一个对象的原型。

```javascript
let proto = {}
let obj = Object.create(proto)
Object.getPrototypeOf(obj) === proto //true

let reg = /a/
Object.getPrototypeOf(reg) === RegExp.prototype //true
```

**Object.getPrototypeOf(Object) 不是 Object.prototype**

JavaScript中的 Object 是构造函数（创建对象的包装器）。
一般用法是：

```var obj = new Object();```

所以：

```javascript
Object.getPrototypeOf( Object );               // ƒ () { [native code] }
Object.getPrototypeOf( Function );             // ƒ () { [native code] }
Object.getPrototypeOf( Object ) === Function.prototype;        // true
```

Object.getPrototypeOf( Object )是把Object这一构造函数看作对象，返回的当然是函数对象的原型，也就是 Function.prototype。

正确的方法是，Object.prototype是构造出来的对象的原型。

```javascript
var obj = new Object();
Object.prototype === Object.getPrototypeOf( obj );              // true
Object.prototype === Object.getPrototypeOf( {} );               // true
```

### Object.prototype.hasOwnProperty()

指示自身属性中是否具有指定的属性。

```javascript
const obj1 = {}
obj1.property1 = 42

console.log(obj1.hasOwnProperty('property1')) //true
console.log(obj1.hasOwnProperty('toString')) //false
```

### Object.create()

创建一个新对象，使用现有的对象来提供新创建对象的`__ptoto__`。

```javascript
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
```

## ES6

### Object.assign()

用于将所有可枚举属性的值从一个或多个源对象分配到目标对象，返回目标对象。

```javascript
const target = { a: 1, b: 2 }
const source = { b: 4, c: 5 }
const returnedTarget = Object.assign(target, source)
console.log(target) //Object { a: 1, b: 4, c: 5}
console.log(returnedTarget) //Object { a: 1, b: 4, c: 5}
```

`Object.assign` 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。该方法使用源对象的`[[Get]]`和目标对象的`[[Set]]`，所以它会调用相关 getter 和 setter。

### Object.create() + Object.assign()实现多继承

```javascript
function MyClass(){
    SuperClass.call(this)
    OtherSuperClass.call(this)
}
MyClass.prototype = Object.create(SuperClass.prototype)//继承一个类
Object.assign(MyClass.prototype, OtherSuperClass.prototype)//混合其他
MyClass.prototype.constructor = MyClass//重新指定构造函数
MyClass.prototype.myMethod = function() {
    //do...
}
```

# Object.is(), ==, ===

## Object.is()

判断两个值是否为同一个值，条件：

* 都是undefined
* 都是null
* 都是true或false
* 都是相同长度的字符串且相同字符按相同顺序排列
* 都是相同对象（意味着每个对象有同一个引用）
* 都是数字，且
  * 都是+0或都是-0
  * 都是NaN
  * 都是非零且非NaN且为同一个值

==在判断之前会对两边变量进行强制转换，===和Object.is()不会。

===将+0和-0视为相等，将NaN和NaN视为不相等

## ==, ===

类型转换规则：

* 当比较数字和字符串时，字符串会转换成数字值。JavaScript尝试将数字字面量转换为数字类型的值。首先，一个数学上的值会从数字字面量中衍生出来，然后这个值被转为一个最接近的Number类型的值。
* 若其中一个操作数为Boolean，则为true会被转换为1，如果false会转换为0。
* 如果一个对象和一个数字或字符串比较，JavaScript会尝试返回对象的默认值。操作符会尝试通过方法valueOf和toString将对象转换为其原始值（字符串或数字）。如果尝试转换失败，会产生一个运行时错误。
* 当且仅当对象与原始值比较时会转换为原始值，两个操作数均为对象时，仅当它们引用相同对象时返回true。

**比较相等性之前，不能将 null 和 undefined 转换成其他任何值**，并且规定null 和 undefined 是相等的。

# 深复制、浅复制

## 浅复制

```javascript
const originArray = [1,2,3,4,5];
const originObj = {a:'a',b:'b',c:[1,2,3],d:{dd:'dd'}};
 
const cloneArray = originArray;
const cloneObj = originObj;
 
console.log(cloneArray); // [1,2,3,4,5]
console.log(originObj); // {a:'a',b:'b',c:Array[3],d:{dd:'dd'}}
 
cloneArray.push(6);
cloneObj.a = {aa:'aa'};
 
console.log(cloneArray); // [1,2,3,4,5,6]
console.log(originArray); // [1,2,3,4,5,6]
 
console.log(cloneObj); // {a:{aa:'aa'},b:'b',c:Array[3],d:{dd:'dd'}}
console.log(originArray); // {a:{aa:'aa'},b:'b',c:Array[3],d:{dd:'dd'}}
```

浅复制只复制引用，并不复制真正的值。

## 深复制

深复制是对目标的完全复制。

方法：

1. JSON.parse(JSON.stringify(obj))

   ```javascript
   let a = {a: 1, b: {c: 2}}
   let b = JSON.parse(JSON.stringify(a))
   a.b.c = 9
   console.log(b) //{a: 1, b: {c: 2}}
   ```

   局限：

   * 遇到undefined会忽略掉；
   * 无法复制函数；
   * 无法处理Set、Map、Symbol；
   * 原有原型链会消失；
   * 循环引用的对象会报错；

2. 递归

   ```javascript
   function deepCopy(source){
       //判断复制的目标是数组还是对象
       const target = source.constructor === Array ? [] : {}
       for(let key in source){
           if(source.hasOwnProperty(key)){
               if(source[key] && typeof source[key] === 'object'){
                   target[key] = source[key].constructor === Array ? [] : {}
                   target[key] = deepCopy(source[key])
               }else{
                   target[key] = source[key]
               }
           }
       }
       return target
   }
   ```

## JavaScript中的复制方法

### concat()

该方法可以连接两个或者更多的数组，但是它不会修改已存在的数组，而是返回一个新数组。

```javascript
const originArray = [1,2,3,4,5];
const cloneArray = originArray.concat();
console.log(cloneArray === originArray); // false
cloneArray.push(6); // [1,2,3,4,5,6]
console.log(originArray); [1,2,3,4,5];
```

当数组有多层时：

```javascript
const originArray = [1,[1,2,3],{a:1}];
const cloneArray = originArray.concat();
console.log(cloneArray === originArray); // false
cloneArray[1].push(4);
cloneArray[2].a = 2; 
console.log(originArray); // [1,[1,2,3,4],{a:2}]
```

concat只会对数组的第一层进行深复制。



# 继承方式



# 变量提升、函数提升

```javascript
//1
function foo(){
    var a = 1
    function a(){
        console.log(a)
    }
}
foo() //1
//2
function foo(){
    var a
    function a(){
        console.log(a)
    }
}
foo() //function a(){...}
```

## 变量提升

```javascript
var a = 1
var b = 2
//实际上：
var a
var b
a = 1
b = 2
```

JavaScript并不是在定义一个变量的时候，声明完成之后立即赋值，而是把所有用到的变量声明以后，再**到变量定义的地方**进行赋值，变量的声明的过程就是变量的提升。

例：

```javascript
function foo(){
    var a = 1
    console.log(a) //1
    console.log(b) //undefined
    var b = 2
}
foo()
//实际上：
function foo(){
    var a
    var b
    a = 1
    console.log(a)
    console.log(b)
    b = 2
}
foo()
```

## 函数提升

与变量提升类似，但函数提升是直接将整个函数体提升到作用域的最开始位置，类似于剪切。

## 提升顺序

函数和变量相比，会被优先提升。这意味着函数会被提升到更靠前的位置。

（个人理解：提升后同名的函数和变量，函数优先级更高，大概可理解为函数表达式？）

例：

```javascript
function foo(){
    console.log(a)
    var a = 1
    console.log(a)
    function a(){}
    console.log(a)
}
foo()
//实际上
function foo(){
    function a(){}
    var a
    console.log(a) //a()
    a = 1
    console.log(a) //1
    console.log(a) //1
}
foo()
//个人感觉这样更合理
function foo(){
    var a = function(){}
    console.log(a) //a()
    a = 1
    console.log(a) //1
    console.log(a) //1
}
```

## 例题

```javascript
//以下代码执行后， num 的值是？

var foo=function(x,y){
return x-y;
}
function foo(x,y){
return x+y;
}
var num=foo(1,2);
```

解析后为

```javascript
function foo(x, y){
    return x + y
}
var foo
var num
foo = function(x, y){
    return x - y
}
num = foo(1, 2)
```



#  事件循环机制

**执行栈**：存储同步任务。

**任务队列**：存储异步任务，这些任务一定要等到执行栈清空后才会执行。

宏任务

- setTimeOut
- setInterval
- setImmediate
- I/O
- UI渲染
- script标签中的整体代码

微任务

- process.nextTick
- Promise
- Object.observe
- MutationObeserver

JavaScript在执行时，先从宏任务队列开始执行，取出第一个宏任务放入执行栈执行，在执行过程中，如果遇到宏任务，则将该宏任务放入宏任务队列，继续运行执行栈中的后续代码。如果遇到微任务，则将该微任务放入微任务队列，继续向下运行执行栈中的后续代码。当执行栈中的代码全部执行完成后，从微任务队列中取出所有微任务放入执行栈中执行。执行完成后，再从宏任务队列中取出下一个宏任务放入执行栈，不断重复上述过程。这一过程被称为事件循环。