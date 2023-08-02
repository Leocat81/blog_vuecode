# 清除浮动

## 什么是 CSS 清除浮动？

在非 IE 浏览器（如 Firefox）下，当容器的高度为 auto，且容器的内容中有浮动（float 为 left 或 right）的元素，在这种情况下，容器的高度不能自动伸长以适应内容的高度，使得内容溢出到容器外面而影响（甚至破坏）布局的现象。这个现象叫浮动溢出，为了防止这个现象的出现而进行的 CSS 处理，就叫 CSS 清除浮动。

举例如下：

<div style="overflow: hidden; ">
<ClearFix></ClearFix>
</div>

```vue
<!-- 清除浮动 -->
<template>
  <div class="container">
    <div class="left">left</div>
    <div class="right">right</div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #333;
  padding: 1px;
}
.left {
  height: 40px;
  width: 30%;
  float: left;
  background-color: red;
}
.right {
  height: 40px;
  width: 40%;
  float: left;
  background-color: blue;
}
</style>
```

可以看到容器（container）并没有将 left 和 right 元素包裹着，并且**使得内容溢出到容器外面而影响（甚至破坏）布局**，此时就需要清除浮动处理。

## 解决方案

### 使用带 clear 属性的空元素

```vue
<!-- 清除浮动 -->
<template>
  <div class="container">
    <div class="left">left</div>
    <div class="right">right</div>
    <div class="clear"></div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #333;
  padding: 1px;
}
.container .left {
  height: 40px;
  width: 30%;
  float: left;
  background-color: red;
}
.container .right {
  height: 40px;
  width: 40%;
  float: left;
  background-color: blue;
}
/* 添加带 clear 属性的空元素 */
.clear {
  clear: both;
}
</style>
```

实现效果：<ClearFix2></ClearFix2>

### 使用 CSS 的 overflow 属性

[在添加 overflow 属性后，浮动元素又回到了容器层，把容器高度撑起，达到了清理浮动的效果](https://m.php.cn/faq/496065.html)

TODO:思考这种方案处理的原理是什么，为什么 overflow 属性可以清除浮动

```vue
<!-- 清除浮动 -->
<template>
  <div class="container">
    <div class="left">left</div>
    <div class="right">right</div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #333;
  padding: 1px;
  /* 父元素添加overflow: hidden;处理 */
  overflow: hidden;
}
.container .left {
  height: 40px;
  width: 30%;
  float: left;
  background-color: red;
}
.container .right {
  height: 40px;
  width: 40%;
  float: left;
  background-color: blue;
}
</style>
```

实现效果：<ClearFix2></ClearFix2>

### 使用 CSS 的:after 伪元素

```vue
<template>
  <div class="container">
    <div class="left">left</div>
    <div class="right">right</div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #333;
  padding: 1px;
}
.container .left {
  height: 40px;
  width: 30%;
  float: left;
  background-color: red;
}
.container .right {
  height: 40px;
  width: 40%;
  float: left;
  background-color: blue;
}
/* 添加伪类处理 */
.container:after {
  content: "";
  display: block;
  clear: both;
}
</style>
```

实现效果： <ClearFix2></ClearFix2>
