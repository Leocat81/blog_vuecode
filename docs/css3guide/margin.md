# 水平垂直居中

[CSS实现水平垂直居中的五种方式](https://gitee.com/pipepandafeng/test/tree/master/src/day_41)

## margin 垂直居中原理

`margin:auto` 是具有强烈计算意味的关键字，用来计算元素对应方向应该获得的剩余空间大小

> - 填充规则
> -  如果一侧定值，一侧auto，则auto为剩余空间大小
> -  如果两侧均是auto，则平分剩余空间

## 垂直居中方案

(1）css 绝对定位同时设置 top bottom left right 会拉伸元素 。top bottom 会把元素拉伸到100%。

(2）故垂直水平居中方案 `height: 120px; width: 120px;position: absolute;left: 0;right: 0; top: 0;bottom: 0;margin: auto`

 - 第一设置 `position: absolute;left: 0;right: 0; top: 0;bottom: 0` 拉伸元素填充至整个父元素的宽高
 - 第二 设置子元素自己的宽高 `height: 120px; width: 120px，`

 - 第三 `margin: auto` ; 自动计算属性(利用上面57的特性分析)。
