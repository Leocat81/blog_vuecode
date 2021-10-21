# apply | bind | call

## apply

### 介绍

<p class="codepart-title"> 👍➡️<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" target = "_blank">MDN官网apply介绍</a>⬅️</p>

```js
Function.apply(obj,args)方法能接收两个参数
obj：这个对象将代替Function类里this对象
args：这个是数组，它将作为参数传给Function（args-->arguments）
```

### 使用

- <h4>实现继承效果</h4>

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
/*定义一个学生类*/

function Student(name, age, grade);
{
  Person.apply(this, arguments);
  this.grade = grade;
}
//创建一个学生类
let student = new Student("zhangsan", 21, "一年级");
//测试
alert(
  "name:" +
    student.name +
    "\n" +
    "age:" +
    student.age +
    "\n" +
    "grade:" +
    student.grade
);
```

::: tip 解释
apply是应用的意思，即为把Person应用到Student的this上。或者理解为Student的this去调用Person方法，`this.Person(arguments)`，因为是Student的this去调用的Person函数，故Person函数中this指向了Student中的this（此处重要：得出一个结论，函数的调用方式决定了  this  的值（运行时绑定）。详见[箭头函数和普通函数的区别](/guide/ArrowDifNomal.html#this)），会把Person当中的属性添加到Student的this上。
:::

Student 实现了继承于 Person 构造函数

- <h4>用 apply 将数组各项添加到另一个数组</h4>

我们可以使用 push 将元素追加到数组中。由于 push 接受可变数量的参数，所以也可以一次追加多个元素。

但是，如果 push 的参数是数组，它会将该数组作为单个元素添加，而不是将这个数组内的每个元素添加进去，因此我们最终会得到一个数组内的数组。如果不想这样呢？concat 符合我们的需求，但它并不是将元素添加到现有数组，而是创建并返回一个新数组。 然而我们需要将元素追加到现有数组......那么怎么做好？难道要写一个循环吗？别当然不是！

apply 正派上用场！

```js
/* push */
let array = ["a", "b"];
let elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

/* Max|Min */
/* 找出数组中最大/小的数字 */
let numbers = [5, 6, 2, 3, 7];
/* 使用Math.min/Math.max以及apply 函数时的代码 */
let max = Math.max.apply(
  null,
  numbers
); /* 基本等同于 Math.max(numbers[0], ...) 或 Math.max(5, 6, ..) */
let min = Math.min.apply(null, numbers);
```

apply 的一个巧妙的用处,可以将一个类数组数组默认的转换为一个参数列表`[param1,param2,param3]` 转换为 `param1,param2,param3` 这个如果让我们用程序来实现将数组的每一个项,来装换为参数的列表,可能都得费一会功夫,借助 apply 的这点特性,所有就有了以上的特殊用法。

### 参考文献

- <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" target = "_blank">Function.prototype.apply():MDN</a>
- <a href="https://www.cnblogs.com/chenhuichao/p/8493095.html" target = "_blank">\_\_\_\_chen. Js apply 方法详解,及其 apply()方法的妙用:博客园</a>

TODO:完成 bind 和 call

<style scoped>
  .codepart-title{
   text-align:center;
   color:dodgerblue
  }
  .codepart-title a{
       color:dodgerblue
  }
</style>
