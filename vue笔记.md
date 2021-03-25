# Vue的响应式原理

数据驱动视图

Vue经过模板编译，虚拟DOM，patch过程更新视图

Vue2.x使用Object.defineProperty()中的setter和getter，使用观察者模式来实现，如果属性变化会通知相关依赖进行更新操作

Vue3.x改用proxy，因为Proxy可以直接监听对象和数组的变化

# Vue.nextTick()



# computed和watch的区别

* computed具有缓存功能，只有依赖的数据产生变化时才触发computed

* watcher没有缓存功能，可以监听数据执行回调。

  深度监听对象中的属性时，可以打开deep选项

  immediate可以在组件加载时立即执行回调函数

  watcher支持异步，有newData，oldData两个参数

# data为什么是函数



# keep-alive作用

可以把一些不常变动的组件或者需要缓存的组件包裹起来，这样可以使组件保存在内存中，而不用重新渲染。

生命周期：

* 初次进入时：created > mounted > activated；退出后触发deactivated

* 再次进入：触发activated；

  事件挂载的方法等，只执行一次的放在mounted中；

  组件每次进入执行的方法放在activated中



# Vue生命周期

new Vue()创建Vue实例

事件和生命周期钩子初始化

**beforeCreate**：在实例初始化之后，data observer和事件配置之前被调用

初始化inject provide state属性

**created**：data已初始化，计算属性，event/watch事件回调，DOM树并未挂载

是否有el属性，无则挂载

是否有模板

有则将模板转化为render函数，通过render函数去渲染创造DOM树

无则编译el对象外层HTML作为模板

**beforeMount**：在挂载前调用，render函数首次被调用生成虚拟DOM

创建Vue实例下的$el（虚拟）并将其替换为真正的DOM

**mounted**：挂载完成，DOM树已经完成渲染到页面，可以进行DOM操作

mounted之后，循环

（**beforeUpdate**：当数据更新时调用

虚拟DOM重新渲染补丁，以最小DOM开支来重新渲染DOM

**updated**：数据更新完成

回到mounted之后的状态）

**beforeDestroy**：实例销毁之前，这里可以访问到实例的数据

清除watcher，子组件，事件监听等

**destroyed**：销毁后调用

组件销毁

## 内置方法、属性运行顺序

props=>methods=>data=>computed=>watch

# 组件间通信

## props, $emit

父组件通过props向子组件传值，子组件通过在子组件中$emit父组件中v-on的方式实现

组件中的数据共有三种形式：**data**、**props**、**computed**

```vue
//App.vue
<template>
  <div id="app">
    <h1>{{title}}</h1>
    <users :users='users' @titleChanged='updateTitle'></users>
  </div>
</template>
<script>
import Users from "./components/Users";
export default {
  name: "App",
  data() {
    return {
      users: ["Alice", "Bob", "Tom"],
      title: "这是父组件标题",
    };
  },
  methods: {
    updateTitle(e) {
      this.title = e;
    },
  },
  components: {
    users: Users,
  },
};
</script>
<style lang="less">
</style>
```

```vue
//Users.vue
<template>
  <div class="hello">
    <h1 @click="changeTitle">{{title}}</h1>
    <ul>
      <li v-for="user in users" :key="user">{{user}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Users",
  data() {
    return {
      title: "点击切换",
    };
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeTitle() {
      this.$emit("titleChanged", "改变父组件的值");
    },
  },
};
</script>
<style>
.hello {
  border: 1px solid #666;
  margin: 20px;
}
</style>
```

## $emit, $on

通过一个空的Vue实例作为中央事件总线（事件中心），用它触发事件和监听事件，巧妙而轻量地实现了任何组件间的通信，包括父子、兄弟、跨级。

实现方式：

```javascript
let Event = new Vue()
Event.$emit('事件名', 数据)
Event.$on('事件名', data=>{})
```

例：

```vue
<div id="itany">
    <my-a></my-a>
    <my-b></my-b>
    <my-c></my-c>
</div>
<template id="a">
  <div>
    <h3>A组件：{{name}}</h3>
    <button @click="send">将数据发送给C组件</button>
  </div>
</template>
<template id="b">
  <div>
    <h3>B组件：{{age}}</h3>
    <button @click="send">将数组发送给C组件</button>
  </div>
</template>
<template id="c">
  <div>
    <h3>C组件：{{name}}，{{age}}</h3>
  </div>
</template>
<script>
var Event = new Vue();//定义一个空的Vue实例
var A = {
    template: '#a',
    data() {
      return {
        name: 'tom'
      }
    },
    methods: {
      send() {
        Event.$emit('data-a', this.name);
      }
    }
}
var B = {
    template: '#b',
    data() {
      return {
        age: 20
      }
    },
    methods: {
      send() {
        Event.$emit('data-b', this.age);
      }
    }
}
var C = {
    template: '#c',
    data() {
      return {
        name: '',
        age: ""
      }
    },
    mounted() {//在模板编译完成后执行
     Event.$on('data-a',name => {
         this.name = name;//箭头函数内部不会产生新的this，这边如果不用=>,this指代Event
     })
     Event.$on('data-b',age => {
         this.age = age;
     })
    }
}
var vm = new Vue({
    el: '#itany',
    components: {
      'my-a': A,
      'my-b': B,
      'my-c': C
    }
});    
</script>
```

$on监听了自定义时间data-a和data-b，因为有时不确定何时会触发事件，一般会在mounted中或created钩子中监听

## Vuex



## $attrs, $listeners

**多级嵌套组件间传递数据**，通常使用Vuex，但如果仅仅是传递数据，而不做中间处理，vuex有些大材小用，因此在Vue2.4中提供了另一种方法：$attrs/$listeners

* **$attrs**：包含了父作用域中不被props所识别（且获取）的特性绑定（class和style除外）。当一个组件没有声明任何props时，这里会包含所有父作用域的绑定（class和style除外），并且可以通过v-bind="$attrs"传入内部组件。通常配合interitAttrs选项一起使用。
* **$listeners**：包含了父作用域中的（不含.native修饰器的）v-on事件监听器。可以通过v-on="$listeners"传入内部组件。

$attrs与$listeners是两个对象，$attrs里存放点是父组件中绑定的非props属性，$listeners里存放的是父组件中绑定的非原生事件。

## provide/inject

祖先组件中通过provide提供变量，在子孙组件中使用inject来注入变量。

provide/inject API主要解决了跨级组件间的通信问题，不过他的使用场景，主要是**子组件获取上级组件的状态**，跨级组件间建立了一种**主动提供与依赖注入**的关系。

例：B是A的子组件

```javascript
//A.vue
export default {
    provide: {
        name: 'Tom'
    }
}
//B.vue
export default {
    inject['name'],
        mounted () {
            console.log(this.name)//Tom
        }
}
```

provide和inject绑定**不是可响应的**，这是刻意为之的。如果传入了一个可监听的对象，那么其对象的属性还是可响应的。

### 如何实现响应式？

一般来说，有两种办法：

- provide祖先组件的实例，然后在子孙组件中注入依赖，这样就可以在子孙组件中直接修改祖先组件的实例的属性，不过这种方法有个缺点就是这个实例上挂载很多没有必要的东西比如props，methods
- 使用2.6最新API Vue.observable 优化响应式 provide(推荐)

## $parent, $children, ref

* ref：如果在普通的DOM元素上使用，引用指向的就是DOM元素；如果用在子组件上，引用就指向组件实例
* $parent,$children：访问父、子实例

## 总结

常见使用场景可以分为三类：

- 父子通信：

父向子传递数据是通过 props，子向父是通过 events（`$emit`）；通过父链 / 子链也可以通信（`$parent` / `$children`）；ref 也可以访问组件实例；provide / inject API；`$attrs/$listeners`

- 兄弟通信：

Bus；Vuex

- 跨级通信：

Bus；Vuex；provide / inject API、`$attrs/$listeners`

# vue-router

**路由用于设定访问路径，并将路径和组件映射起来**

前端路由的核心，就在于 —— 改变视图的同时不会向后端发出请求

## hash模式，history模式

最直观的区别就是在url中hash带了一个#

**hash**：地址栏中的#符号

特点：虽然出现在URL中，但不会被包含在HTTP请求中，对后端完全没有影响，改变hash不会重新加载页面

**history**：利用了HTML5 History Interface中新增的pushState()和replaceState()方法，这两个方法用于浏览器的历史记录栈，在当前已有的back、forward、go的基础上，提供了对历史记录进行修改的功能。只是当它们修改时，虽然改变了当前的URL，但浏览器不会立即向后端发送请求

