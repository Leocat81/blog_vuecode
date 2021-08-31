# 巧用 JS 位运算

## 取整
 - 可以采用 ` >> 0 `或 ` | ` 来进行取整操作

```js
console.log(1.01 >> 0) // 1
console.log(1.01 | 0) // 1
console.log(-1.01 >> 0) // -1
console.log(-1.01 | 0)  // -1
console.log(2.23123 >> 0)  // 2
console.log(2.23123 | 0)  // 2
console.log(-2.23123 >>  0 )  // -2 
console.log(-2.23123 |  0 )  // -2 
```
- 移位0有什么意义

查过一些资料，其中stackoverflow里面有一个[高票回答](https://stackoverflow.com/questions/1822350/what-is-the-javascript-operator-and-how-do-you-use-it)，里面有这么一句话

::: tip 回答
It doesn't just convert non-Numbers to Number, it converts them to Numbers that can be expressed as 32-bit unsigned ints.
:::

原来移位操作符在移位前做了两种转换，第一将不是number类型的数据转换为number，第二将number转换为无符号的32bit数据，也就是Uint32类型。这些与移位的位数无关，移位0位主要就是用了js的内部特性做了前两种转换。

- Uint32类型是如何转换的

1 . 如果不能转换为Number，那就为0
2 . 如果为非整数，先转换为整数，参考公式sign(n) ⋅ floor(abs(n))

``` js
function ToInteger(x) {
    x = Number(x);
    return x < 0 ? Math.ceil(x) : Math.floor(x);
}
```
3 . 如果是正数，返回正数，如果是负数，返回负数 + 2的32次方

``` js
function modulo(a, b) {
    return a - Math.floor(a/b)*b;
}
function ToUint32(x) {
    return modulo(ToInteger(x), Math.pow(2, 32));
}
```

## 参考文献
- [js中表达式 >>> 0 浅析](https://segmentfault.com/a/1190000014613703?utm_source=tag-newest)
- [2ality – JavaScript and more](https://2ality.com/2012/02/js-integers.html)
- [巧用 JS 位运算:每日一探](http://www.sosout.com/2018/10/09/javascript-bits-op.html)

