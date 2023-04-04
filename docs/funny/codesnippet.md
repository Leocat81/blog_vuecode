# 代码片段

## 判断两个数组是否相同

> 来源于 : [vue-router 源码中比较两个路由记录中匹配到的路由是否相同](https://github.com/vuejs/router/blob/main/packages/playground/src/router.ts#L168)

```js
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

const result = arr1.every((record, i) => record === arr2[i]);
console.log("对比结果=" + result);
```

## 使用定时器模拟异步操作

> 来源于：[vue-router 源码中测试模拟异步操作](https://github.com/vuejs/router/blob/main/packages/playground/src/router.ts#L179)

```js
const delay = (t: number) => new Promise((resolve) => setTimeout(resolve, t));

async function printConsole() {
  await delay(1000);
  return Promise.reject(false);
}

(async () => {
  try {
    let res = await printConsole();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
})();
```
