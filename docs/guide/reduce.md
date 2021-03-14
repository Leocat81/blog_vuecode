# reduce 函数

## 语法

```js
array.reduce(function (total, currentValue, currentIndex, arr),initialValue )
```

## 参数解析

| 参数         |                  描述                  |
| ------------ | :------------------------------------: |
| total        | 必需。初始值, 或者计算结束后的返回值。 |
| currentValue |             必需。当前元素             |
| currentIndex |          可选。当前元素的索引          |
| arr          |     可选。当前元素所属的数组对象。     |
| initialValue |        可选。传递给函数的初始值        |

## 简单用法

- 数组求和，求积。

```JS
let names = [1,2,3,4];

let sum=names.reduce((pre,cur)=> pre+cur) //数组求和
let mul=names.reduce((pre,cur)=>pre*cur)  //数组求积
let sum2=names.reduce((pre,cur)=> pre+cur,5)  // 传递给函数初始值为5  故为5+1+2+3+4+5
let mul2=names.reduce((pre,cur)=>pre*cur,5)   // 传递给函数初始值为5  故为5*1*2*3*4*5

console.log(sum); // 10
console.log(mul); // 24
console.log(sum2); // 15
console.log(mul2); // 120
```

<p class="code_title">例子1</p>

## 高级用法

(1) 计算数组中每个元素出现的次数

```ts
let strArr: Array<string> = ["a", "b", "c", "a", "b", "c", "c", "d"];

interface LabelledValue {
  [index: string]: number;
}

let countStrNum: object = strArr.reduce((pre: LabelledValue, cur: string) => {
  if (cur in pre) {
    pre[cur]++;
  } else {
    pre[cur] = 1;
  }
  return pre;
}, {});
console.log(JSON.stringify(countStrNum)); // {"a":2,"b":2,"c":3,"d":1}
```

(2) 数组去重

```ts
let arr: number[] = [1, 2, 3, 4, 4, 1];
let newArr: Array<number> = arr.reduce((pre: Array<number>, cur: number) => {
  //   方法一：使用push
  if (!pre.includes(cur)) {
    pre.push(cur);
  }
  return pre;
  //   方法二：使用concat
  //   if (!pre.includes(cur)) {
  //     return pre.concat(cur);
  //   } else {
  //     return pre;
  //   }
}, []);
console.log(newArr); // [1,2,3,4]
```

（3）将二维数组转化为一维

```ts
let arr: Array<number> = [
  [0, 1],
  [2, 3],
  [4, 5],
];
let newArr: Array<number> = arr.reduce(
  (pre: Array<number>, cur: Array<number>) => {
    return pre.concat(cur);
  }
);
console.log(newArr); // [0, 1, 2, 3, 4, 5]
```

（4）将多维数组转化为一维

```ts
let arr: any = [
  [0, 1],
  [2, 3],
  [4, [5, 6, 7]],
];
const newArr: any = function(arr: any) {
  return arr.reduce((pre: any, cur: any) => {
    return pre.concat(Array.isArray(cur) ? newArr(cur) : cur);
  }, []);
};
console.log(newArr(arr));
```

(5) 对象里的属性求和

```JS
var result = [
    {
        subject: 'math',
        score: 10
    },
    {
        subject: 'chinese',
        score: 20
    },
    {
        subject: 'english',
        score: 30
    }
];

var sum = result.reduce(function(prev, cur) {
    return cur.score + prev;
}, 0);
console.log(sum) //60
```

<style scoped>
  .code_title{
    text-align:center;
    font-size:12px;
  }
</style>
