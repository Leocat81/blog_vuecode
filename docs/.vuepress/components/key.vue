<!--  -->
<template>
  <div>
    <button @click="add">添加一个小王</button>

    <h3>采用index做为key的人员表</h3>
    <ul>
      <li v-for="(item, index) in user"
          :key="index">
        {{ item.name }}---{{ item.age }}岁
        <input type="text">
      </li>
    </ul>
    <hr />
    <h3>采用id做为key的人员表</h3>
    <ul>
      <li v-for="(item, index) in user"
          :key="item.id">
        {{ item.name }}---{{ item.age }}岁
        <input type="text">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [
        {
          id: 1,
          name: "小李",
          age: '19'
        },
        {
          id: 2,
          name: "小张",
          age: '29'
        }
      ]
    }
  },
  methods: {
    add() {
      this.user = [{ name: '小王', age: '39', id: 3 }, ...this.user]
    }
  },
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>