# 理解原型对象

## 1.介绍理解原型对象之前，让我们先看一段代码。

```js
function Person(name, age, job) {
  Person.prototype.name = "somebody";
  Person.prototype.age = 29;
  Person.prototype.job = "tyloo";
  Person.prototype.sayName = function() {
    console.log(this.name);
  };
}
let person1 = new Person();
person1.sayName(); //somebody
let person2 = new Person();
person2.sayName(); //somebody
console.log(person1.sayName === person2.sayName); //true
```

此函数创建是遵循了 js 中原型模式而创建的函数，我们将 sayName()方法和所有属性直接添加到了 Person 的 prototype 属性中。即使如此，我们任然可以通过调用构造函数来创建对象，而且新对象还会具有相同的属性和方法。如果不理解上面代码也没关系，只需记住两点：

- Person.prototype 即为原型对象
- 实例（person1 或 person2）可以访问原型对象上的方法和属性。

![RUNOOB 图标](../assets/1.jpg)

图 6-1 展示了 Person 构造函数，Person 的原型属性以及现有的两个实例之间的关系。

```js
function Person() {
  this.color = "yellow";
  this.showColor = function() {
    return this.color;
  };
}

var person1 = new Person();

console.log(Person.prototype.constructor === Person); // 构造函数Person的默认对象的constructor // 属性
console.log(person1.constructor === Person); //person1实例通过__proto__指向了Person的原型，所以具有了 // person1实例可以访问到constructor
Person.prototype = {}; //把Person构造函数的原型进行了重新赋值

// Person.prototype.constructor = Person;

var person2 = new Person(); // person2实例通过__proto__指向了Person的原型，此时Person的原型是{}，这个空对象的 // constructor 的值不是Person了，而是Object
console.log("person2.constructor: " + person2.constructor === Person); // false
```

::: tip 结论

- 任何一个 prototype 对象（原型对象）都有一个 constructor 属性，指向它的构造函数
- 原型最初只包含 constructor 属性，而该属性也是共享的，因此可以通过对象实例访问。即所有对象实例可以访问 constructor 属性，是因为原型链的存在，对象实例会沿着原型链继承原型所有属性。
  :::

## 2.判断原型的一些方法

```js
function Person(name, age, job) {
  Person.prototype.name = "somebody";
  Person.prototype.age = 29;
  Person.prototype.job = "tyloo";
  Person.prototype.sayName = function() {
    console.log(this.name);
  };
}
let person1 = new Person();
person1.sayName(); //somebody
let person2 = new Person();
person2.name = "Nike";
person2.sayName(); //somebody
console.log(person1.sayName === person2.sayName); //true
```

- 原型对象的`isPrototypeOf()`

```JS
/*
  如果实例的[[Prototype]]（_proto_）指向调用
  isPrototypeOf()方法的对象（此处为Person.prototype），
  那么这个方法就返回true
*/
console.log(Person.prototype.isPrototypeOf(person1)); //true
console.log(Person.prototype.isPrototypeOf(person2)); //true
```

- ES5 新增方法 `Object.getPrototypeOf()`

```js
/* 
  Object.getPrototypeOf()获取一个对象的原型
*/
console.log(Object.getPrototypeOf(person1) == Person.prototype); // true
console.log(Object.getPrototypeOf(person1).name);
```

### 2.1 判断对象或实例上是否存在某个属性

- `hasOwnProperty()` (这个方法由 Object 继承而来)

```js
/* 
  只有给定的属性存在于实例中，而不是由原型继承而来，才返回true。
*/
console.log(person1.hasOwnProperty("name")); //false
console.log(person2.hasOwnProperty("name")); //true
```

- `in 操作符`

```js
/* 
  判断对象实例是否包含某个属性，无论该属性存在于实例中还是原型中
*/
console.log("name" in person1); //true
console.log("name" in person2); //true
```

### 2.2 判断一个属性到底使用的是实例中还是原型中

使用`hasOwnProperty()`和`in 操作符`结合判断，即可分清属性到底是在实例中被调用还是原型中被调用。（实例中的属性会覆盖原型中的属性）

```JS
/*
  in 操作符只要对象能访问到该属性就返回true
  hasOwnProperty() 只在属性存在于实例中时才返回true
  只要属性存在于对象实例中即返回false
  注意：当原型和对象实例中都存在该属性时，该函数返回false
*/
function hasPrototypePeroperty(object,name) {
  return !object.hasOwnProperty(name) && (name in object);
}
```

请看下面例子

```JS
function Person() {
  Person.prototype.name = "somebody";
  Person.prototype.age = 29;
  Person.prototype.job = "tyloo";
  Person.prototype.sayName = function() {
    console.log(this.name);
  };
}
let person = new Person()
console.log(hasPrototypePeroperty(person,"name")); // true
person.name="Greg"
console.log(hasPrototypePeroperty(person,"name")); // false
```

::: warning
实例中的属性会覆盖原型中的属性
:::

### 2.3 对象创建 new Object()和 Object.create()比较

new Object() 通过构造函数来创建对象, 添加的属性是在自身实例下。
Object.create() es6 创建对象的另一种方式，可以理解为继承一个对象, 添加的属性是在原型下。

```js
// new Object() 方式创建
var a = { rep: "apple" };
var b = new Object(a);
console.log(b); // {rep: "apple"}
console.log(b.__proto__); // {}
console.log(b.rep); // {rep: "apple"}

// Object.create() 方式创建
var a = { rep: "apple" };
var b = Object.create(a);
console.log(b); // {}
console.log(b.__proto__); // {rep: "apple"}
console.log(b.rep); // {rep: "apple"}
```

Object.create()方法创建的对象时，属性是在原型下面的，也可以直接访问 b.rep // {rep: "apple"} ,
此时这个值不是 b 自身的，是它通过原型链 proto 来访问到 b 的值。

<p class="codepart-title"> 👍➡️<a href="https://github.com/ljianshu/Blog/issues/18"  target = "_blank">
其他优秀文章讲解（原型与原型链详解）
</a>⬅️</p>

<style scoped>
.codepart-title{
 text-align:center;
 color:dodgerblue
}
.codepart-title a{
     color:dodgerblue
}
</style>
