# Class

## 要点

```js
class Example {
  constructor() {
    this.name = "simple";
    const proto = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(proto));
  }
  first() {}
  second() {}
  static third() {}
}

let e = new Example(); // ['constructor', 'first', 'second']
console.log(e.hasOwnProperty("name"));
```

- 上面代码中，name 是实例对象 e 自身的属性（因为定义在 this 对象上），所以 hasOwnProperty()方法返回 true，所以 hasOwnProperty()方法返回 false。这些都与 ES5 的行为保持一致。
- 而 first()|second()|third()是添加到 this 的原型中
- 静态方法不是 this 的属性，它们只是类自身的属性。
