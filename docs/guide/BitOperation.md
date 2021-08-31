## 巧用 JS 位运算

### 取整
可以采用 ` >> 0 ` 来进行取整操作

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
### 推荐文献

- <a href="http://www.sosout.com/2018/10/09/javascript-bits-op.html" target = "_blank">巧用 JS 位运算:每日一探</a>

