# 闭包
   闭包是指有权访问另一个函数作用域中的变量的函数。
## 原理
   闭包的实现原理，其实是利用了作用域链的特性，我们都知道作用域链就是在当前执行环境下访问某个变量时，如果不存在就一直向外层寻找，最终寻找到最外层也就是全局作用域，这样就形成了一个链条。
## 简单实现

```js
function print() {
  var a = 1;
  return function() {
    return ++a;
  };
}
let p = print();
console.log(p()); // 2
console.log(p()); // 3
console.log(p()); // 4
```
## 原理解释说明
<p>在上面的例子中 print函数中的匿名函数有作用域链有三层。0:自己，1:print函数,2:全局。尽管匿名函数被return出去，但是他的<b>作用域链在初始化的时候就已经完成</b>了（被保存在了内存的[[Scope]]属性中）。所以尽管匿名函数在全局环境中被调用，但是他还是能获取到print函数中的变量。
</p>

::: warning 提问
可能有的同学会产生疑问，按照js的垃圾回收机制，print()函数调用完成后，就应该回收销毁局部变量，这里为什么匿名函数还能获取到局部变量a的累加值呢?
:::

::: tip 结论
这是因为匿名函数的作用域链任然在引用print函数中的变量，导致垃圾回收机制GC不会回收a变量，所以我们才能得到a变量的累加值。
:::

::: warning 提问
那我们什么时候能让a变量被垃圾回收呢？
:::

::: tip 回答
`print=null`,~~将p设置为null时，解除了匿名函数对print函数的引用~~将print设置为null时，解除了匿名函数对a的引用,就等于通知垃圾回收例程将其清除。
:::

## 作用
作用1：隐藏变量，避免全局污染

作用2：可以读取函数内部的变量

同时闭包使用不当，优点就变成了缺点：

缺点1：导致变量不会被垃圾回收机制回收，造成内存消耗

缺点2：不恰当的使用闭包可能会造成内存泄漏的问题

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures

## 推荐文献
- <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures" target = "_blank">闭包:MDN</a>