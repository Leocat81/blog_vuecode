# 箭头函数和普通函数的区别
## 主要区别
  <p>箭头函数</p>
  
  ```js
  let addUser=()=>{
      console.log("添加一个用户")
  }
  ```
  <p>普通函数</p>
  
  ```js
function addUser(){
      console.log("添加一个用户")
  }
  ```
- <p class="diff">区别1:箭头函数使用箭头命名，普通函数中没有。</p>

- <p class="diff">区别2:箭头函数都为匿名函数，普通函数可以为匿名函数，也可以为具体名函数。</p>

- <p class="diff">区别3:箭头函数不能用于构造函数(不可以使用new) ,普通函数可以。</p>

``` JS
let FunConstructor = () => {
    console.log('lll');
}

let fc = new FunConstructor();
```
![RUNOOB 图标](../assets/2.png)

- <p class="diff">区别4：箭头函数不绑定`arguments`，取而代之用rest参数...解决(`arguments` 是一个对应于传递给函数的参数的类数组对象。)</p>

```JS
function A(a){
  console.log(arguments);
}
A(1,2,3,4,5,8);  //  [1, 2, 3, 4, 5, 8, callee: ƒ, Symbol(Symbol.iterator): ƒ]


let B = (b)=>{
  console.log(arguments);
}
B(2,92,32,32);   // Uncaught ReferenceError: arguments is not defined


let C = (...c) => {
  console.log(c);
}
C(3,82,32,11323);  // [3, 82, 32, 11323]
```
## 箭头函数中this指向问题详解
- <p class="diff">区别5：箭头函数不绑定this，会捕获其所在的上下文的this值，作为自己的this值</p>

``` JS
var obj = {
  a: 10,
  b: () => {
    console.log(this.a); // undefined
    console.log(this); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
  },
  c: function() {
    console.log(this.a); // 10
    console.log(this); // {a: 10, b: ƒ, c: ƒ}
  }
}
obj.b(); 
obj.c();
```
<p class="code_title">例子1</p>

``` JS
var name = 'window'; 

var A = {
   name: 'A',
   sayHello: function(){
      var s = () => console.log(this.name)
      return s//返回箭头函数s
   }
}

var sayHello = A.sayHello();
sayHello();// 输出A 

var B = {
   name: 'B';
}

sayHello.call(B); //还是A
sayHello.call(); //还是A

```
<p class="code_title">例子2</p>

OK，这样就做到了永远指向A对象了，我们再根据<b>“该函数所在的作用域指向的对象”</b>来分析一下：

- 该函数所在的作用域：箭头函数s 所在的作用域是sayHello,<b>因为sayHello是一个函数。</b>(该函数所指的为箭头函数，<b>只有函数才有作用域（也就是sayHello)</b>，也就是箭头函数所在的函数this即为箭头函数的this)
- 作用域指向的对象：A.sayHello指向的对象是A。
- 所以箭头函数s 中this就是指向A啦 ～～

<p class="error_example">下面看一个错误例子</p>

```js
var A = {
   name: 'A',
   sayHello:{
       name: 'B',
       print:()=>{
           console.log(this.name);
       }
   }
}
var name='c'
A.sayHello.print() //输出为 "c"
```
<p class="code_title">例子3</p>
为什么这里既没有输出B,也没有输出A呢，请记住上面那句话，<b>该函数所在作用域指向的对象</b>。在这个例子中，箭头函数所在的作用域既非sayHello，也非A，因为他们都不是函数，非函数是没有作用域的,this只能用在函数中，对象中是没有this的。这里箭头函数所在的作用域为window(在浏览器中)，故输出为“c"。


<h3>总结：箭头函数this在定义时就已经确定了，不会更改了。箭头函数this永远为该函数所在作用域指向的对象（结合上面例子仔细理解这句话）</h3>

  <style>
  .diff{
      letter-spacing:2px;
  }
  .code_title{
    text-align:center;
    font-size:12px;
  }
  .error_example{
    font-size:15px;
    color:red;
  }
  </style>
