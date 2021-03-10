---
navbar: false
sidebar: false
---

<template>
<div class="main">
    <canvas id="fire"></canvas>
    <div class="wrap">
      <component v-if="content" :is="content"></component>
    </div>
    </div>
</template>
<script>
import {init}  from "./fire.js";
export default {
  data() {
    return {
      content: null,
    };
  },
  mounted() {
    init()
    import("./content").then((module) => {
      this.content = module.default;
    });
  },
};
</script>
    <style scoped>
    .main{
      position: relative;
    }
canvas {
  z-index: -1;
  display: block;
  position: fixed;
  height: 100vh;
  width: 100vw;
}
.wrap {
    position: absolute;
    left: 35%;
    padding: 24px;
    max-width: 700px;
    margin: auto;
}
</style>