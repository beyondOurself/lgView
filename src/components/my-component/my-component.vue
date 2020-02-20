<template>
  <div class="com-one">
    <div class="test" ref="test"></div>
    <button class="btn" ref="btn" @click="getWidth">获取</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
      getWidth(){
          const d = this.$refs.test;
          alert(window.innerWidth+"======="+window.getComputedStyle(d, null).getPropertyValue('width')) ;
      }
  },
};
</script>
<style lang="less">
.com-one {
  .test {
    height: 1rem;
    width: 1rem;
    background-color: red;
  }
  .btn{
      font-size: 100%;
      padding: .25rem .5rem;
  }
}
</style>
