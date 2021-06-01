# 防抖和节流

## 防抖

### 介绍

需求 1：在第一次触发事件时，不立即执行函数，而是给出一个期限值比如 200ms，然后：

- 如果在 200ms 内没有再次触发滚动事件，那么就执行函数
- 如果在 200ms 内再次触发滚动事件，那么当前的计时取消，重新开始计时

效果：如果短时间内大量触发同一事件，只会执行一次函数。

实现：既然前面都提到了计时，那实现的关键就在于 setTimeout 这个函数，由于还需要一个变量来保存计时，考虑维护全局纯净，可以借助闭包来实现：

```JS
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

### 应用

- <h4>在vue上应用防抖</h4>

```js
/* 定义防抖函数 */
/**
 * @desc 防抖函数
 * @param {需要防抖的函数} fn
 * @param {延迟时间} delay
 */
export function debounce(fn: () => void, delay: number) {
  let timer: number | null = null; // 借助闭包
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay); // 简化写法
  };
}
/* 在vue文件中导入函数 */
import { debounce } from "@/utils/debounce";
export default class gasDetails extends Vue {
  private fn: any = debounce(this.availableCoupon, 500); // 防抖（定义在此处是采用闭包缓存timer)
  get something(){
    if(...){
      // debounce(this.availableCoupon, 500)() ❌ 此处不能打包缓存效果，每次都是执行新函数
      fn() ✔
   }
    return true
  }
  availableCoupon(){
    // your code
  }
}
```

## 节流

需求 2：使用上面的防抖方案来处理问题的结果是：

如果在限定时间段内，不断触发滚动事件（比如某个用户闲着无聊，按住滚动不断的拖来拖去），只要不停止触发，理论上就永远不会输出当前距离顶部的距离。
但是如果产品同学的期望处理方案是：即使用户不断拖动滚动条，也能在某个时间间隔之后给出反馈呢？

```JS
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

## 参考文献

- <a href="https://segmentfault.com/a/1190000018428170" target="_blank">安歌.浅谈 JS 防抖和节流.segmentfault</a>
