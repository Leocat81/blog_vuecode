# 渲染函数 & JSX 使用

Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用渲染函数，它比模板更接近编译器。

## render 使用 createElement 函数

vue 可以使用 createElement 函数来创建虚拟 DOM。看下面一段代码，我们创建了一个简单的 `<h1>` 标签。

```js
<script>
export default {
  name: "BaseComponent",
  props: {
    test: Number,
  },
  methods: {
    handleClick() {
      this.$emit("customize-click");
    },
  },
  render() {
    const h = this.$createElement
    return h('div',{
      'class': { box: true },
      style: { fontSize: '14px' }
    },[
       '我是字符串',
        h('p',{ 'class': { p: true } },'我是p标签'),
        h('a',{ 'class': { a: true } },'我是a标签呀'),
        h('p',{ on: { click: this.handleClick } },'点我!!!')
    ])
  },
};
</script>
<style scoped>
.box {
  background: rgba(0, 0, 0, 0.5);
}
.a {
  color: blue;
  text-decoration: underline;
}
.p {
  color: firebrick;
}
</style>
```

<p class="codepart-title">子组件</p>

```js
<template>
<div>
    <child></child>
</div>
</template>

<script>
export default {
components:{
    'child':()=>import('./child')
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
```

<p class="codepart-title">父组件</p>

## createElement 参数

接下来你需要熟悉的是如何在 createElement 函数中使用模板中的那些功能。这里是 createElement 接受的参数：

```js
// @returns {VNode}
createElement(
  // {String | Object | Function}
  // 一个 HTML 标签名、组件选项对象，或者
  // resolve 了上述任何一种的一个 async 函数。必填项。
  "div",

  // {Object}
  // 一个与模板中 attribute 对应的数据对象。可选。
  {
    // (详情见下一节)
  },

  // {String | Array}
  // 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
  // 也可以使用字符串来生成“文本虚拟节点”。可选。
  [
    "先写一些文字",
    createElement("h1", "一则头条"),
    createElement(MyComponent, {
      props: {
        someProp: "foobar",
      },
    }),
  ]
);
```

<p class="codepart-title"> → <a href="https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0"  target = "_blank">查看官网示例</a></p>
TODO:介绍createElement如何绑定元素，事件及其他处理

## JSX

<style scoped>
.codepart-title{
 text-align:center;
 color:dodgerblue
}
</style>
