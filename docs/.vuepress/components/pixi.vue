<!--  -->
<template>
  <div id="demo"></div>
</template>

<script>
// import panda4 from '/img/panda4.png';
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    import("pixi.js").then((module) => {
      const app = new PIXI.Application({
        transparent: true, // default: false 透明度
      });
      document.getElementById("demo").appendChild(app.view);

      // create a new Sprite from an image path
      const bunny = PIXI.Sprite.from("/img/panda4.png");

      // center the sprite's anchor point
      bunny.anchor.set(0.5);

      // move the sprite to the center of the screen
      bunny.x = app.screen.width / 2;
      bunny.y = app.screen.height / 2;

      app.stage.addChild(bunny);

      // Listen for animate update
      app.ticker.add((delta) => {
        // just for fun, let's rotate mr rabbit a little
        // delta is 1 if running at 100% performance
        // creates frame-independent transformation
        bunny.x += 1 + delta;
      });
    });
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>