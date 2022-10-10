# npm link 使用

npm link常用于调试npm 包

## 如何解决开发调试中运行的多个版本

> 在开发node包的过程中，会存在项目中依赖A的版本和需要调试的包中依赖A的版本不一致的情况，此时又需要在项目中调试该包，那么需要如何处理呢？

可在项目中

1. 首先需要先删除掉原有项目的依赖A

2. 链接该包（npm link）

3. 链接该包中的依赖A

```js
npm link path - to - app / node_modules / react
```

4. 重新运行该项目即可

* [https://iws.io/2022/invalid-hook-multiple-react-instances](https://iws.io/2022/invalid-hook-multiple-react-instances)

## 参考地址

* [https://blog.csdn.net/weixin_42274805/article/details/123474053](https://blog.csdn.net/weixin_42274805/article/details/123474053)
