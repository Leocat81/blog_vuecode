---
title: "javascipt 面向对象编程"
slug: "extend-object"
categories: ["guide"]
tags: []
draft: false
---

## 构造函数继承实现方法

<p class="codepart-title"> 👍➡️<a href="https://www.cnblogs.com/goloving/p/7774077.html" target = "_blank">构造函数"继承"的六种方法</a>⬅️</p>

```js
//现在有一个"动物"对象的构造函数。
function Animal() {
  this.species = "动物";
}

//还有一个"猫"对象的构造函数。
function Cat(name, color) {
  this.name = name;
  this.color = color;
}
console.log(typeof new Animal());
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
let cat = new Cat("xi", "red");
console.log(cat);
console.log(cat.species);
```

<!-- TODO:完成js面向对象编程 -->

<style scoped>
.codepart-title{
 text-align:center;
 color:dodgerblue
}
.codepart-title a{
     color:dodgerblue
}
</style>