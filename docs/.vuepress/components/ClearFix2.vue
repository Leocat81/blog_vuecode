<!-- 清除浮动 -->
<template>
  <div class="container">
    <div class="left">left</div>
    <div class="right">right</div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #333;
  padding: 1px;
}
.container .left {
  height: 40px;
  width: 30%;
  float: left;
  background-color: red;
}
.container .right {
  height: 40px;
  width: 40%;
  float: left;
  background-color: blue;
}
.container:after{
  content: "";
  display: block;
  clear: both;
}
</style>