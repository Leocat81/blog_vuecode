# key 的作用详解

经典面试题：

    1：react/vue 中的key有什么作用？（key的作用是神什么）

    2：为什么遍历列表时，key最好不要用index?

## 1：作用

    
    简单的说: key是虚拟DOA对象的标识，在更新显示时key起着极其重要的作用。

    详细的说:当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】,随后React进行【新虚拟DOM】与【旧虚拟DON】的diff比较，比较规则如下:

        a.旧虚教DOM中找到了与新虚拟DOM相同的key:
             (1).若虚拟DOM中内容没变,直接使用之前的真实DOM
             (2).若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DoM

        b.旧虚拟DOM中未找到与新虚拟DOM相同的key
             根据数据创建新的真实DOM，随后渲染到到页面

## 2: 用index作为key可能公引发的问题

   1。若对数据进行: 逆序添加、逆序删除等破坏顺序操作:

        会产生没有必要的真实DOM更新==>界面效果没问题，但效率低。

   2．如果结构中还包含输入类的DOM:

        会产生错误DOM更新==>界面有问题。

   3．注意! 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。

## 3．开发中如何选择key?

   最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值。2. 如果确定只是简单的屁示数据，用index也是可以的。

## 4: 举例

<key/>

在两个表格的小李和小张后分别输入信息后，点击上方添加小王按钮，可以看到界面呈现出了不同的效果。

```js
/* 新旧虚拟dom比较 */

/* index作为key */

/* 旧dom */
<li key="0">小李---19岁<input type="text"/></li>
<li key="1">小张---29岁<input type="text"/></li>
/* 新dom */
<li key="0">小王---39岁<input type="text"/></li>
<li key="1">小李---19岁<input type="text"/></li>
<li key="2">小张---29岁<input type="text"/></li>

/* id作为key */

/* 旧dom */
<li key="1">小李---19岁<input type="text"/></li>
<li key="2">小张---29岁<input type="text"/></li>
/* 新dom */
<li key="3">小王---39岁<input type="text"/></li>
<li key="1">小李---19岁<input type="text"/></li>
<li key="2">小张---29岁<input type="text"/></li>

```
<b>index作为key时</b>

- 首先比较key为0时，发现存在同样的key,但是文本内容不一致,而input标签一致(input中value不一致不在比较范围)，故替换文本内容渲染为真实dom到页面，input还是采用旧的真实dom。所以小王渲染了真实的文本，但是其后的输入框却是采用了之前小李的输入框。

- 其次比较key为1时，如上同理，小李采用了之前小张的输入框。

<b>当id作为key时</b>

- 可以看到，小王产生的key时一个全新的值，所以它会根据内容创建一个全新的真实dom。

- 而小李和小张的id和之前一样，文本内容，input标签也完全一致，故不会产生dom的替换，会采用之前旧的dom。

<hr/>

部分代码如下：
```js
...
user: [{
            id: 1,
            name: "小李",
            age: '19'
        },
        {
            id: 2,
            name: "小张",
            age: '29'
        }
    ]
    ...
    methods: {
        add() {
            this.user = [{
                name: '小王',
                age: '39',
                id: 3
            }, ...this.user]
        }
    },
```
## 参考文献

[048_尚硅谷react教程_DOM的diffing算法 —— BiliBili](https://www.bilibili.com/video/BV1wy4y1D7JT?p=48)