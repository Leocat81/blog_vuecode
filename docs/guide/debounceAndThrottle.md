# 防抖和节流

## 防抖

需求1：在第一次触发事件时，不立即执行函数，而是给出一个期限值比如200ms，然后：

- 如果在200ms内没有再次触发滚动事件，那么就执行函数
- 如果在200ms内再次触发滚动事件，那么当前的计时取消，重新开始计时

效果：如果短时间内大量触发同一事件，只会执行一次函数。

实现：既然前面都提到了计时，那实现的关键就在于setTimeout这个函数，由于还需要一个变量来保存计时，考虑维护全局纯净，可以借助闭包来实现：

``` JS
// 防抖函数
function debounce(fn) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fn(), 2000);
  };
}
```
## 节流

需求2：使用上面的防抖方案来处理问题的结果是：

如果在限定时间段内，不断触发滚动事件（比如某个用户闲着无聊，按住滚动不断的拖来拖去），只要不停止触发，理论上就永远不会输出当前距离顶部的距离。
但是如果产品同学的期望处理方案是：即使用户不断拖动滚动条，也能在某个时间间隔之后给出反馈呢？

``` JS
//节流函数  // 通过在setTimeout 唯一改变状态码来保证下一次（1s）执行定时器
function throttle(fn) {
  let status = true;
  return function () {
    if (!status) {
      status = false;
    } else {
      status = false;
      setTimeout(() => {
        fn();
        // 一秒之后可以再次执行定时器
        status = true;
      }, 1000);
    }
  };
}
```
