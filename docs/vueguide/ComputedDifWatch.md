# computed 和 watch 比较

<content>

- 计算属性定义必须和data中定义不一样。watch则必须一样。
- 计算属性是基于响应式依赖进行缓存的。watch则只要值变化就触发，不管值一样不一样。
- 不支持异步，当computed内有异步操作时无效，无法监听数据的变化。watch支持异步。
- computed是一个属性由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed。而watch为当一个属性发生变化时，需要执行对应的操作；一对多；
- watch支持深度监听(deep),和组件加载立即触发回调函数执行(immediate)

</content>

<style scoped>
content ul li{
  line-height: 40px;
  letter-spacing: 1px;
}
</style>