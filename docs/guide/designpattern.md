# 设计模式
* 通用的惰性单例

## 通用的惰性单例

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
