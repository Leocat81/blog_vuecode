<!--  -->
<template>
  <div>
    <p>arr:{{arr}}</p>
    <p>arr.length:{{length}}</p>
    <button @click="printArrLength">直接数组长度</button>
    <button @click="printArrLengthFromReduce">reduce获取数组长度</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      length: 0,
    };
  },
  mounted() {
    this.arr[0] = "a";
    this.arr[9] = "b";
     this.length = this.arr.length;
  },
  methods: {
    printArrLength() {
      this.length = this.arr.length;
    },
    printArrLengthFromReduce() {
      this.length = this.arr.reduce((prev, currentValue, currentIndex) => {
        return ++prev;
      }, 0);
      console.log( this.length);
    },
  },
};
</script>