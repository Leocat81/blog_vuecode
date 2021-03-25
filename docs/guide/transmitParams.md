# 传递参数注意事项

::: tip 结论
EAMAScript 中所有函数的参数都是按值传递的，这与java中参数传递是一致性的。
:::

``` JS
var count = 20
var result =addTen(count);
alert(count); // 20，没有变化
alert(result) // 30 

function addTen(num) { // 存在函数声明提升，故调用可以写在声明前面
    num+=10;
    return num
}
```
<p>这里的函数addTen()有一个参数num，而参数实际上是函数的局部变量。在调用这个函数时，变量count作为参数传递给函数，这个变量的值是20。于是，数值20被复制给参数num以便在addTen()中使用。在函数内部，参数num的值被加上了10，但这一变化不会影响函数外部count变量。参数num与变量count互不认识，他们仅仅是具有相同的值。假如num是按引用传递的话，那么变量count的值也将变成30，从而反应函数内部的修改。
</p>

<p>下面再看两个例子：</p>

```js
function setName(obj) {
    obj.name='Niko'
}
var person = new Object();
setName(person)
alert(person.name) // Niko
```

```js {3,4}
function setName(obj) {
    obj.name='Niko'
    obj=new object()
    obj.name='Simple'
}
var person = new Object();
setName(person)
alert(person.name) // Niko
```
::: tip 结论
总结就是基本数据类型传递的是形参，形参不影响实参；引用数据类型传递的是地址，形参在方法内被改变，实参也会改变，若在方法内实例化了同名对象，即产生了新的地址，对这个同名对象的改变，由于地址不一样，所以也不会影响原来的对象。
:::