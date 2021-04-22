# 手写 Promise

## 简易版 Promise

```js
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
function Promise1(executor) {
  var _this = this;
  this.state = PENDING; //状态
  this.value = undefined; //成功结果
  this.reason = undefined; //失败原因

  this.onFulfilled = []; //成功的回调
  this.onRejected = []; //失败的回调
  function resolve(value) {
    if (_this.state === PENDING) {
      _this.state = FULFILLED;
      _this.value = value;
      _this.onFulfilled.forEach((fn) => {
        console.log(fn);
        return fn(value);
      });
    }
  }
  function reject(reason) {
    if (_this.state === PENDING) {
      _this.state = REJECTED;
      _this.reason = reason;
      _this.onRejected.forEach((fn) => {
        console.log(fn);
        return fn(reason);
      });
    }
  }
  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
Promise1.prototype.then = function(onFulfilled, onRejected) {
  if (this.state === FULFILLED) {
    typeof onFulfilled === "function" && onFulfilled(this.value);
  }
  if (this.state === REJECTED) {
    typeof onRejected === "function" && onRejected(this.reason);
  }
  if (this.state === PENDING) {
    typeof onFulfilled === "function" && this.onFulfilled.push(onFulfilled);
    typeof onRejected === "function" && this.onRejected.push(onRejected);
  }
};
```

<h3>TODO:</h3>

- 完成链式调用
<style scoped>
  .title{
    color:red;
    box-shadow: 2px 2px 3px  #888888;
  }
  </style>
