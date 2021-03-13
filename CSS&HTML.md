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
    background: #f00;
}
```

