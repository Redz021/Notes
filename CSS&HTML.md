# HTML

## 元数据

含有页面相关信息，帮助软件更好运用和渲染页面

* \<base> 指定文档中所有相对URL的根URL
* \<head> 文档配置信息
* \<link> 最常用于链接样式表，也可以用来创建站点图标
* \<style> 默认CSS格式
* \<title> 浏览器标签页/标题栏上显示的标题，只包含文本
* \<meta> 表示不能由其他元相关元素表示的元数据信息

## 内容

从逻辑上进行组织划分，为页面内容创建明确的大纲，以便区分各个章节的内容

* \<article> 定义页面独立的内容区域
* \<aside> 定义页面的侧边栏内容
* \<footer> 页脚
* \<header> 展示介绍性内容，通常包含介绍性内容或辅助导航的实用元素
* \<main> 呈现文档的body或应用的主体部分
* \<nav> 在当前文档或其他文档中提供导航链接
* \<section> 表示一个包含在HTML文档中的独立部分

## 文本内容

标识内容的宗旨或结构，这对于accessibility和SEO很重要

* \<blockquote> 引用内容，在渲染时通常有一定的缩进
* \<figure> 一段独立内容，通常为主文中引用的图片、插图、表格、代码段等
* \<figcaption> 与\<figure>配合使用，是figure的说明或标题
* \<pre> 预定义格式文本，按照原文件编排，文本中的空格、换行符都会显示出来

## 内联文本语义

定义一个单词、一行内容或任意文本的语义、结构或样式

* \<abbr> abbreviation 缩写，可指定title（acronym已弃用）
* \<bdi> 双向隔离元素，告诉浏览器的双向算法将其包含的文本与周围的文本隔离
* \<cite> 表示引用，必须包含标题
* \<code> 呈现一段代码，默认等宽字体
* \<data> 将一个指定内容和机器可读的翻译联系在一起
* \<dfn> 表示术语的一个定义
* \<em> 标记出需要用户着重阅读的内容
* \<i> 需要区分普通文本的一系列文本，通常为斜体
* \<kbd> 用于表示用户输入
* \<mark> 突出显示的文本
* \<q> 短引用
* \<s> 删除线，表示文档编辑时建议使用del和ins
* \<small> 边注释和附属细则，包括版权和法律文本，字体变小一号
* \<strong> 表示文本十分重要，一般粗体显示
* \<sub> 下标
* \<sup> 上标
* \<u> 下划线

## input新type值

- color：用于指定颜色的控件。
- date：用于输入日期的控件（年，月，日，不包括时间）。
- month：用于输入年月的控件，不带时区。
- week：用于输入一个由星期-年组成的日期，日期不包括时区
- time：用于输入不含时区的时间控件。
- datetime：基于UTC时区的日期时间输入控件（时，分，秒及几分之一秒）。
- datetime-local：用于输入日期时间控件，不包含时区。
- email：用于应该包含 e-mail 地址的输入域。在提交表单时，会自动验证 email 域的值。
- number: 用于应该包含数值的输入域。只能输入数字
- range：用于应该包含一定范围内数字值的输入域。range 类型显示为滑动条。
- search：用于输入搜索字符串的单行文本字段。换行会被从输入的值中自动移除。
- tel：用于输入电话号码的控件。在移动端输入会显示数字键盘，PC端无效果
- url：用于编辑URL的字段。

# CSS

* A, B		选择多个元素
* A + B		A，B有共同父元素，B紧接A，选中B
* A ~ B		A，B相同父元素，A选中的元素在B之前，不一定紧接
* A > B		选中的B是A的直接子元素
* A B		B是A的后代，不一定是直接子代
优先级：!important > 内联 > id > class，属性，伪类 > 类型（元素），伪元素

## 盒模型

**box-sizing: content-box**标准盒模型：宽高为width/height+padding+border+margin

**box-sizing: border-box**怪异盒模型：宽高为width（content的宽高+padding+border）+margin

## BFC

### 触发方式

* \<html>
* 浮动元素：float不为none
* 绝对定位元素：position为absolute或fixed
* 行内块元素：display: inline-block
* overflow不为visible
* 弹性元素
* 网格元素
* display: flow-root(新)

### 用途

* 解决float高度塌陷
* 解决margin塌陷
* 使元素不被float元素遮挡
* 多栏布局

## 水平垂直居中

### 绝对定位

使用margin或tranforn

```css
#container {
    position: relative;
    background: #060;
    width: 600px;
    height: 600px;
}
#content {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 400px;
    width: 400px;
	margin-top: -200px;
    margin-left: -200px;
    /*transform: -50%*/
    background: #f00;
}
```

使用margin: auto

```css
#container2 {
    position: relative;
    background-color: blue;
    width: 400px;
    height: 400px;
}
#content2 {
    position: absolute;
    background-color: cornflowerblue;
    width: 150px;
    height: 150px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
```

使用flex

```css
#container3 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    background-color: crimson;
}
#content3 {
    background-color: darkorange;
    width: 400px;
    height: 400px;
}
```

margin: 0 auto水平居中+transform垂直居中

```css
#container4 {
    background-color: darkorchid;
    width: 500px;
    height: 300px;
}
#content4 {
    background-color: darkslateblue;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
}
```

## 两边固定宽度，中间自适应

### 浮动

```html
<div class="container">
    <div class="left"></div>
    <div class="right"></div>
    <div class="center"></div>
</div>
```

```css
.left {
    width:200px;
    background-color: #f00;
    float: left;
}
.right {
    width: 320px;
    background-color: #0ff;
    float: right;
}
.center {
    margin-left: 200px;
    margin-right: 320px;
    background-color: #eee;
}
```

### 绝对定位

```html
<div class="container">
    <div class="left2"></div>
    <div class="right2"></div>
    <div class="center2"></div>
</div>
```

```css
.left2 {
    height: 100%;
    width: 350px;
    background: #ace;
    position: absolute;
    left: 0;
}
.right2 {
    height: 100%;
    width: 250px;
    background: #bdf;
    position: absolute;
    right: 0;
}
.center2 {
    height: 100%;
    margin-left: 350px;
    margin-right: 250px;
    background: #345;
}
```

### flex

```html
<div class="container3">
	<div class="left3"></div>
	<div class="center3"></div>
	<div class="right3"></div>
</div>
```

```css
.container3 {
    display: flex;
    height: 400px;
}
.left3 {
    width: 230px;
    background: #32d;
}
.center3 {
    flex: 1;
    background: #123;
}
.right3 {
    width: 340px;
    background: #567;
}
```

## animation与transition的区别

| animation                              | transition                   |
| -------------------------------------- | ---------------------------- |
| 配合@keyframes可以不触发事件就触发动画 | 需要配合事件来触发动画       |
| 可以设置循环次数                       | 只能触发一次                 |
| 可以结合@keyframes设置每一帧           | 只有开始结束两帧             |
| 可以设置中间帧的状态                   | 样式的过渡过程，只有开始结束 |

## 百分比%

* 子元素的宽度、高度是根据父元素宽度、高度计算的
* 子元素的**padding、margin**无论水平垂直方向都是根据**父元素宽度**计算的
* border**不可以**使用百分比设置

## em

* 若当前元素设置了字体大小，那么就相对于当前元素的字体大小
* 若当前元素没有字体大小，则相对于第一个设置字体大小的祖先元素的字体大小
* 如果当前元素和祖先元素都没有字体大小，则默认16px

## rem

* 除了根元素之外，其他祖先元素的字体大小不会影响rem尺寸
* 如果根元素设置了字体大小，那么就相当于根元素的字体大小
* 如果根元素没有设置，默认16px

## vw, vh

相对于视口viewport的width和height

例：`1vw`表示占用视口宽度的1%

**vmin**表示vw和vh中较小的一个

**vmax**表示较大的一个

## 移动端视口标签

* 在PC端，视口就是浏览器窗口可视区域的大小
* 在移动端，视口大小并不等于窗口大小，移动端视口宽度被人定义为980

### 如何保证在移动端不自动缩放网页的尺寸

```html
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

* width=device-width：设置视口宽度等于设备的宽度
* initial-scale=1.0：初始缩放比例，1不缩放
* maximum-scale：允许用户缩放到的最大比例
* minimum-scale：允许用户缩放到的最小比例
* user-scalable：用户是否可以手动缩放

### 移动端适配方案

#### 媒体查询

* 通过查询设备的宽度来执行不同的CSS代码，最终达到界面的配置

* 优势：简单；调整屏幕宽度的时候不用刷新页面即可响应式展示；特别适合对移动端和PC端维护同一套代码的时候

* 劣势：由于PC端和移动端使用同一套代码，所以代码量比较大，不利于维护；为了兼顾大屏幕或高清设备，会造成其他设备资源浪费，特别是加载图片资源；为了兼顾移动端和PC端各自响应式的显示效果，难免会损失各自特有的交互方式
* 应用场景：对于比较简单的网页，诸如：企业官网、宣传单页等可以通过媒体查询、伸缩布局、bootstrap来实现响应式站点

#### 媒体查询+rem

虽然我们将移动端独立到一套代码中了, 但是由于移动端也有很多的屏幕尺寸, 所以也需要进行适配 

例如: 

* iPhone3/4/5:  320px 
* iPhone678:    375px 
* iPhoneX/plus: 414px 

当下在企业开发中设计师提供给我们的移动端设计图片是750*xxx的或者1125*xxx的 所以我们需要对设计师提供的图片进行等比缩放, 这样才能1:1还原设计图片 

如何等比缩放? 

将设计图片等分为指定份数,求出每一份的大小   

例如: 750设计图片分为7.5份, 那么每一份的大小就是100px 

将目标屏幕也等分为指定份数,求出每一份的大小   

例如: 375屏幕也分为7.5份, 那么每一份的大小就是50px 

用 原始元素尺寸 / 原始图片每一份大小 * 目标屏幕每一份大小 = 等比缩放后的尺寸   

例如: 设计图片上有一个150*150的图片, 我想等比缩放显示到375屏幕上   

那么: 150 / 100 * 50 = 1.5*50 = 75px 

如何在前端开发中应用这个计算公式? 

目标屏幕每一份的大小就是html的font-size: 50px 

使用时只需要用 "原始元素尺寸 / 原始图片每一份大小rem" 即可

150 / 100 = 1.5 / 1.5rem

1rem = 50px  / 1.5rem === 1.5*50 = 75px 

对于比较复杂(界面复杂)的网页, 诸如: 电商、团购等 更多的则是才是PC端一套代码, 移动端一套代码

#### js

通过媒体查询的方法，需要写一大堆的对font-size的设置，这个太不方便了
况且一般在移动端用的手机浏览的网页，手机大小是固定的
可以通过用javascript的方式来操作html根元素的font-size的值
    注意点: 
    通过JS动态计算当前屏幕每一份大小的好处: 不用写很多的媒体查询
    坏处: 切换了屏幕尺寸之后需要刷新界面才有效,而媒体查询如果切换了屏幕的尺寸不需要重新刷新界面
    document.documentElement.style.fontSize = window.innerWidth / 7.5 + "px";

#### 最终方案

1.如何解决设备像素和CSS像素不一样的问题?
  如果设备像素和CSS像素一样, 那么无需处理不会带来任何负面影响
  如果设备像素是CSS像素的2倍, 那么我们只需将CSS像素缩小一半即可
  但是有时候设备像素可能是CSS像素的3倍/4倍...

2.获取设备像素比DPR(Device Pixel Ratio)
    DPR = 设备像素 / CSS像素
    iPhone3GS :  320 / 320 = 1
    iPhone4S:    640 / 320 = 2
    iPhone678:   750 / 375 = 2
    iPhoneX:     1125 / 375 = 3
    在JS中我们可以通过 window.devicePixelRatio 获取当前的设备像素

3.如何缩小?
    通过 `<meta name="viewport">`的initial-scale属性来缩小
    注意点: 缩放视口后视口大小会发生变化

   let scale = 1.0 / window.devicePixelRatio;
   let text = `<meta name="viewport" content="width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no">`;
   document.documentElement.style.fontSize = window.innerWidth / 7.5 + "px";