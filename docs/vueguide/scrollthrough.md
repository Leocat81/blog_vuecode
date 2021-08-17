# 滑动穿透问题

## 问题描述

设置弹窗以 fixed 定位显示后，弹窗内有滚动条，当弹窗内滚动到最底部时，此时滑动弹窗外，再次切回滑动弹窗内，弹窗内的内容不能正常滑动。以下示例请在手机端查看：

<ScrollThrough/>

## 解决方案

- 采用 BetterScroll npm 包来解决

```js
/* 第一步：引入better-scroll */
import BScroll from "better-scroll";
/* 第二部: 初始化 此处需注意初始的节点必须存在，要注意节点上是否有v-if,否则会提示节点找不到 */
new BScroll(".dialog_body", {
  pullUpLoad: true,
  scrollbar: true,
  click: true,
  pullDownRefresh: true,
  scrollY: true,
});
```
<ScrollThrough BetterScroll/>

<!-- TODO:解决遮罩层依然滚动问题 -->
## 参考文献

<a href="https://www.cnblogs.com/padding1015/p/10568070.html" target="_blank">滑动穿透六种解决方案</a>
