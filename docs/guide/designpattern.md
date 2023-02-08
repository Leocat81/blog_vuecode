# 设计模式

主要阅读[(图灵原创) 曾探 - JavaScript 设计模式与开发实践-人民邮电出版社 (2015)](/pdf/designpattern.pdf), 其后将一些重点笔记记录如下:

## 高级函数

高阶函数(Higher-order function)是指至少满足下条件之一的函数。

* 函数可以作为参数被传递
* 函数可以作为返回值输出

### 实现 AOP

AOP(面向切面编程)的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，这些 跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等。把这些功能抽离出来之后， 再通过“动态织入”的方式掺入业务逻辑模块中。这样做的好处首先是可以保持业务逻辑模的纯净和高内聚性，其次是可以很方便地复用日志统计等功能模块。

```js
Function.prototype.before = function(beforefn) {
    var __self = this;
    return function() {
        beforefn.apply(this, arguments); // 打印 1
        return __self.apply(this, arguments); // 打印 2
    };
};

Function.prototype.after = function(afterfn) {
    var __self = this;
    return function() {
        var ret = __self.apply(this, arguments); // 此处_self是对 打印1，打印2 函数在此处的引用，并在此处最终被执行
        afterfn.apply(this, arguments); // 打印 3
        return ret;
    };
};

var func = function() {
    console.log(2);
};

func = func
    .before(function() {
        console.log(1);
    })
    .after(function() {
        console.log(3);
    });

func(); // 打印 1 2 3
```

## 单例模式

单例模式作用：比如每次都保证最多一个弹窗打开出现在页面中。例如 `Vant Toast组件` 即被设计为了单例模式。
[Vant Toast组件](https://vant-contrib.gitee.io/vant/v2/#/zh-CN/toast)

### 通用的惰性单例

函数定义：

```js
let getSingle = function(fn) {
    let result;
    return function() {
        return result || (result = fn.apply(this, arguments));
    }
};
```

使用：

```js
let createLoginLayer = function() {
    let div = document.createElement('div');
    div.innerHTML = '我是登陆浮窗';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
}

let createSingleLoginLayer = getSingle(createLoginLayer);

document.getElementById('loginBtn').onclick = function() {
    let loginLayer = createSingleLoginLayer();
    loginLayer.style.display = 'block';
};
```

## 迭代器模式
