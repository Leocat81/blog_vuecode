# box-shadow

<div class="desc">

`box-shadow: offset-x offset-y blur spread color inset;` <br><br>
`box-shadow: X轴偏移量 Y轴偏移量 [阴影模糊半径] [阴影扩展] [阴影颜色] [投影方式];`<br>

</div>

```css
.desc {
  border: 5px solid LightCoral;
  box-shadow: 0 0 15px 5px;
  margin-bottom: 20px;
}
```

单词解释：blur:模糊 spread:伸展 inset:内凹

<h3>阴影和布局</h3>

- 阴影不影响布局， 但是可能会覆盖其他 box 或者其他 box 的阴影。
- 阴影不触发滚动条，也不增加滚动区域的大小。
- 所以布局时可忽略阴影。

<style>
.desc{
    border:5px solid LightCoral;
     box-shadow: 0 0 15px 5px ;
     margin-bottom:20px;
}
</style>
