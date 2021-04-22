# 普通函数和构造函数区别

- <p>构造函数也是一个普通函数，创建方式和普通函数一样，但构造函数习惯上首字母大写</p>
- <p>构造函数和普通函数的区别在于：调用方式不一样。作用也不一样（构造函数用来新建实例对象）</p>

```js
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name);
  };
}
let person = new Person("somebody", 29, "tyloo"); //构造函数调用
person.sayName();
Person("niko", 30, "faze"); //普通函数调用
global.sayName(); //this此时代指global(在浏览器是window)
```

<p>当在全局作用域调用一个函数是,this对象始终指向Global(在浏览器是window)</p>
