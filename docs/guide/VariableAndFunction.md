# js中变量提升和函数声明提升

## 变量提升

::: tip 结论
使用var声明的变量会自动添加到最接近的环境中。(1)在函数内部，最接近的环境就是函数的局部环境；在with语句中，最接近的环境时函数环境。(2)如果初始化变量时没有使用var声明，该变量会自动被添加到全局环境。
:::


```js
console.log(a);
var a = "a";
var foo = () => {
    console.log(a);
    var a = "a1";
}
foo(); // 此时会打印undefined,undefined 
```
由于js自上而下逐行解释执行的，有人可能会认为第一行代码引用了一个没有声明的变量a，会抛出 ReferenceError  异常，而注掉第一行后，由于变量 a 在第二行log之前已经声明并赋值，打印结果应该是 "a"。实际不然。

## 什么是提升（Hosting）？
::: tip 结论
引擎会在解释JavaScript代码之前首先对齐进行编译，编译过程中的一部分工作就是找到所有的声明，并用合适的作用域将他们关联起来，这也正是词法作用域的核心内容。
:::

以上代码经过javascript预编译后，则会变成：

```js
var a;
console.log(a); // undefined
a = "a";
var foo = () => {
    var a; // 全局变量会被局部作用域中的同名变量覆盖
    console.log(a); // undefined
    a = "a1";
}
foo();
```
这就是javascript变量提升带来的变化。

## 函数声明提升
   上面介绍了js中变量提升的效果，下面来解释一下js中函数提升，要了解函数提升，必须先了定义函数两种方式：一种是<b>函数声明</b>，另一种就是<b>函数表达式</b>。

```js
// 函数声明
function print(arg0,arg1,arg2) {
    //函数体
}


// 函数表达式
var print = function (arg0,arg1,arg2) {
    // 函数体
}
```
<p><b>关于函数声明，它的一个最重要的特征就是函数声明提升。意思时执行代码之前会先读取函数声明。这就意味着可以把函数声明放在调用它的语句后面。</b></p>

```js
console.log(foo1); // [Function: foo1]
foo1(); // foo1
console.log(foo2); // undefined
foo2(); // TypeError: foo2 is not a function
function foo1 () {
	console.log("foo1");
};
var foo2 = function () {
	console.log("foo2");
};
```
::: tip 结论
即函数提升只会提升函数声明，而不会提升函数表达式。
:::