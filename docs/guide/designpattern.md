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

### 使用AOP动态改变函数的参数

```js
// @ts-ignore
Function.prototype.before = function(beforefn) {
    var __self = this;
    return function(params) {
        beforefn.apply(this, arguments); // arguments一开始为{a:'a'},但是执行beforefn方法后，beforefn修改了arguments的值，故此时arguments={a:'a',b:'b'}
        return __self.apply(this, arguments); // 这里返回是因为：如果原函数有返回值，这里执行完原函数后，将返回值返回出去。避免原函数无法返回值。
    };
};

var func = function(param) {
    console.log(param); // 输出: {a: "a", b: "b"}
};

// @ts-ignore
func = func.before(function(param) {
    param.b = "b";
});

func({
    a: "a"
});
```

## 单例模式

单例模式作用：比如每次都保证最多一个弹窗打开出现在页面中。例如 `
Vant Toast组件` 即被设计为了单例模式。
[Vant Toast 组件](https://vant-contrib.gitee.io/vant/v2/#/zh-CN/toast)

### 通用的惰性单例

函数定义：

```
js
let getSingle = function(fn) {

    let result;
    return function() {
        return result || (result = fn.apply(this, arguments));
    };

}; 

```

使用：

```js
let createLoginLayer = function() {
    let div = document.createElement("div");
    div.innerHTML = "我是登陆浮窗";
    div.style.display = "none";
    document.body.appendChild(div);
    return div;
};

let createSingleLoginLayer = getSingle(createLoginLayer);

document.getElementById("loginBtn").onclick = function() {
    let loginLayer = createSingleLoginLayer();
    loginLayer.style.display = "block";
};
```

## 迭代器模式

## 职责链模式

> 职责链模式的最大优点就是解耦了请求发送者和 N 个接收者之间的复杂关 系，由于不知道链中的哪个节点可以处理你发出的请求，所以你只需把请求传递给第一个节点即可

职责链模式我觉得最大优势在于改造系统中维护一个充斥着条件分支语句的巨大的函数。

举例：
公司针对支付过定金的用户有一定的优惠政策。在正式够买后，已经支付过 500 元定金的用户会收到 100 元的商城优惠券，200 元定金的用户可以收到 50 元的优惠券，而之前没有支付定金的用户只能进入普通购买模式，也就是没有优优惠券，且在库存有限的情况下不一定保证能买到。
我们的订单页面是 PHP 吐出的模版，在页面加载之初，PHP 会传递给页面几个字段。

* orderType: 表示订单类型(定金用户或者普通购买用户)，code 的值为 1 的时候是 500 元 定金用户，为 2 的时候是 200 元定金用户，为 3 的时候是普通够买用户。
* pay: 表示用户是否已经支付定金，值为 true 或者 false, 虽然用户已经下过 500 元定金的定单，但如果他一直没有支付定金，现在只能降级进入普通够买模式。
* stock: 表示当前用于普通够买的手机库存数量，已经支付过 500 元或者 200 元定金的用户，不受此限制。

```js
const order = (orderType, pay, stock) => {
    if (orderType === 1) {
        // 500元定金用户
        if (pay === true) {
            // 支付过定金
            console.log("500元定金预约,得到100元优惠券");
        } else {
            if (stock > 0) {
                console.log("普通购买。无优惠券");
            } else {
                console.log("手机库存不足");
            }
        }
    } else if (orderType === 2) {
        // 200元定金用户
        if (pay === true) {
            // 支付过定金
            console.log("200元定金预约,得到50元优惠券");
        } else {
            if (stock > 0) {
                console.log("普通购买。无优惠券");
            } else {
                console.log("手机库存不足");
            }
        }
    } else if (orderType === 3) {
        // 普通用户
        if (stock > 0) {
            console.log("普通购买。无优惠券");
        } else {
            console.log("手机库存不足");
        }
    }
};
```

可以看出，以上代码虽实现了基本功能，但是谈不上可读性和复用性，接下来让我们使用(AOP)职责链模式重构此代码。

```js
var order500 = function(orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log("500元定金预约,得到100元优惠券");
    } else {
        return 'nextFunction'
    }
}
var order200 = function(orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log("200元定金预约,得到50元优惠券");
    } else {
        return 'nextFunction'
    }
}
var orderNormal = function(orderType, pay, stock) {
    if (stock > 0) {
        console.log("普通购买。无优惠券");
    } else {
        console.log("手机库存不足");
    }
}

// @ts-ignore
Function.prototype.after = function(afterfn) {
    var __self = this;
    return function() {
        var ret = __self.apply(this, arguments); // 此处_self是对 打印1，打印2 函数在此处的引用，并在此处最终被执行
        if (ret === "nextFunction") {
            console.log(ret);
            return afterfn.apply(this, arguments); // 打印 3
        }
        return ret;
    };
};

/* order500.after(order200)返回一个函数，其后又可以调用after函数，从而实现了链式调用的效果 */
// @ts-ignore
const order = order500.after(order200).after(orderNormal)
order(3, true, 500);
```

## 中介者模式

验证是否正整数

```js
if ((number - 0) | 0) !== number - 0) {
    true
} else {
    false
}
```
