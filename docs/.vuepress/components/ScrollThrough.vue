<!--  -->
<template>
  <div class="content">
    <button type="button" @click="open">打开弹窗</button>
    <div v-if="show" class="dialog__wrapper">
      <div class="dialog">
        <p class="close_dialog" @click="close">❎</p>
        <div class="dialog_body">
          <ul>
            <li v-for="i in 10" @click="close">
              {{i}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="popup"></div>
  </div>
</template>

<script>
import { Toast } from "zen-toast";
import BScroll from "better-scroll";
import Vue from "vue";
Vue.use(Toast);
export default {
  data() {
    return {
      show: false,
    };
  },
  props: ["BetterScroll"],
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    close() {
      this.show = false;
    },
    open() {
      if (!this.agent()) {
        this.show = true;
        if (this.BetterScroll !== undefined) {
          this.$nextTick(() => {
            new BScroll(".dialog_body", {
              pullUpLoad: true,
              scrollbar: true,
              click: true,
              pullDownRefresh: true,
              scrollY: true,
            });
          });
        } else {
          this.$nextTick(() => {
            let bodyDom = document.getElementsByClassName("dialog_body")[0];
            debugger;
            bodyDom.style.overflow = "scroll";
          });
        }
      } else {
        Toast.fail("请在移动端中查看");
      }
    },
    agent() {
      let sUserAgent = navigator.userAgent.toLowerCase();
      let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
      let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
      let bIsMidp = sUserAgent.match(/midp/i) == "midp";
      let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
      let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
      let bIsAndroid = sUserAgent.match(/android/i) == "android";
      let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
      let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
      if (
        bIsIphoneOs ||
        bIsMidp ||
        bIsUc7 ||
        bIsUc ||
        bIsAndroid ||
        bIsCE ||
        bIsWM
      ) {
        return 0;
        // window.location.href = './Mhtml/index.html'; // 跳转
      } else {
        return 1;
      }
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.dialog__wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  background-color: rgb(200, 200, 200, 0.8);
  z-index: 9999;
}
.dialog {
  position: relative;
  margin: 0 auto;
  margin-top: 300px;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  width: 60%;
  height: 200px;
}
.dialog_body {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.popup {
  width: 200px;
  height: 100px;
}
.close_dialog {
  padding: 0;
  margin: 0;
  line-height: normal;
  position: absolute;
  right: 10px;
  top: 0;
  text-align: right;
  width: 100%;
}
</style>