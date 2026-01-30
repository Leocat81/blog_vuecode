---
title: "数组的深拷贝和浅拷贝"
slug: "lowcopy-anddeep-copy"
categories: ["guide"]
tags: []
draft: false
---

## 基本概念

javascript 分原始类型与引用类型。Array 是引用类型，直接用“=”号赋值的话，只是把源数组的地址(或叫指针)赋值给目的数组，并没有实现数组的数据的拷贝。这种方式的实现属于浅拷贝。

深拷贝是开辟新的储存空间，两个对象对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。

## 区别
介绍完基本概念，让我们尝试举例来说明两者的不同。

### 浅拷贝

```js
var arr1 = [1, 2, 3, 4];
var arr2 = arr1; 
arr1[0] = 6;                //数组是用堆去保存的，相等的时候只是把存放的地址拷贝过去了，两个指向了同一个地址，所以在改变其中一个的值，其他的也跟着改变了
console.log(arr2[0]);       //输出结果为6
console.log(arr[1]);        //[6, 2, 3, 4]
console.log(arr[2]);        //[6, 2, 3, 4]
```
### 深拷贝


- slice()
- concat()
- map()
- ES6扩展运算符

```js
var arr1 = [1, 2, 3, 4];
var arr2 = arr1.slice(0);   //从0开始到末尾截取数组，然后返回一个新的数组
arr1[0] = 6; 
console.log(arr2[0]);       //输出结果为1
console.log(arr[1]);        //[6, 2, 3, 4]
console.log(arr[2]);        //[1, 2, 3, 4]
```
<p class="code_title">🟢 slice() 🟢</p>

```js
var arr1 = [1, 2, 3, 4];
var arr2 = arr1.concat();   //连接数组，如果连接的是一个空，那么也是返回了新的本身的数组
arr1[0] = 6; 
console.log(arr2[0]);       //输出结果为1
console.log(arr1);        //[6, 2, 3, 4]
console.log(arr2);        //[1, 2, 3, 4]
```
<p class="code_title">🟢 concat() 🟢</p>

```js
var arr1 = [1, 2, 3, 4]; 
var arr2 = arr1.map(function(value){
     return value;
})                          //使用map方法遍历数组然后返回新的数组，里面的值不变
arr1[0] = 6;   
console.log(arr2[0])        //输出结果为1
console.log(arr1);          //[6, 2, 3, 4]
console.log(arr2);          //[1, 2, 3, 4]
```
<p class="code_title">🟢 map() 🟢</p>

```js
var arr1 = [1, 2, 3, 4];
var arr2  = [...arr1];     //ES6扩展运算符实现数组的深拷贝
arr1[0] = 6; 
console.log(arr2[0]);       //输出结果为1
console.log(arr1);        //[6, 2, 3, 4]
console.log(arr2);        //[1, 2, 3, 4]
```
<p class="code_title">🟢 ES6扩展运算符 🟢 </p>

<style scoped>
p{
    text-indent:2em;
    line-height:40px;
}
.code_title{
    text-align:center;
    font-size:16px;
    color:Crimson;
    font-weight:500;
}
</style>