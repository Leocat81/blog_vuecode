<!--
  功能：功能描述
  作者：pipe
  邮箱：1173882893@qq.com
  时间：2021年03月06日 17:44:42
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
<div>
    <h1 class="intro">Hi ~</h1>
    <img src="/img/panda4.png"/>
    <p>我是司俊峰. 我是一个前端设计开发工程师.</p>
    <a href="/guide/">欢迎大家来到我的博客</a>
    <!-- <a href="/guide/" @click="test11">sdsdsd</a> -->
</div>
</template>

<script>
export default {
data() {
return {

}
},
methods:{
    test11(){
        console.log(this.$route);
    }
}
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap');
.intro{
    font-family: 'Akaya Telivigala', cursive;
    font-size: 10rem;
    margin: 0 0 1.5rem 0;
    line-height: 1;
    white-space: nowrap;
    color: cornsilk;
}
p{
    font-family: 'Zhi Mang Xing', cursive;
        font-size: 2rem;
    line-height: 1.6;
    margin: 0 0 1.5rem 0;
    color: cornsilk;
}
a{
        font-family: 'Zhi Mang Xing', cursive;
        font-size: 2rem;
    line-height: 1.6;
    margin: 0 0 1.5rem 0;
    color: cornsilk;
}
</style>