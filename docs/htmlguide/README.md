# html5 新特性

 (1) DOCTYPE声明
 ==========

``` html
<!Doctype html>
```

(2)字符编码声明
 ==========

``` HTML
<meta charset="UTF-8">   //不写的话HTML5默认也是UTF-8
```

(3)新增的语义/结构化标签 Semantic
 ==========

| 标签        | 标签           | 标签  |
| ------------- |:-------------:| -----:|
| heade(头部)     | nav（导航） | main （主要内容）|
| aside  （侧边内容）    | section （在文档中定义部分）     |   article （文章）|
| figure（img和figcaption组合放在figure里） | footer （尾部，可多个）     |     |

(4)`HTML5Shiv`垫片包
 ==========
是一个针对 IE 浏览器的 HTML5 JavaScript 补丁，目的是让 IE 识别并支持 HTML5 元素。
`HTML5Shiv`包裹在`<head>`元素里，
是一个js外部文件
在使用HTML5新元素就可以引入它了

```js
<head>
// 下面是HTML的条件注释判断。只给懂的人...呸、浏览器看
  <!--[if lt IE 9]>
    <script src="/js/html5shiv.js"></script>
  <![endif]--> 
</head>
<body>
<!-- HTML5标签-->
<section>
<h1>Famous Cities</h1>
<article>
<h2>London</h2>
<p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
</article>
</section>
</body>
```
（5）新增8个的语义化标签都为块级元素 
 ==========

- 语义元素转换为块元素
- 如果像确保新老浏览器都支持，我们可以手动设置CSS样式
``` css
header, section, footer, aside, nav, main, article, figure {
    display: block; 
}
```

（6）新的图形标签 SVG和canvas
 ==========
（7） 新的多媒体标签 audio和video
 ==========
（8）新的HTML5的API
 ==========
- HTML Geolocation 地理位置
- HTML Drag & Drop拖放
- HTML Local Storage 本地存储
- HTML Web Workers web工作者