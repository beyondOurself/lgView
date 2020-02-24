<template>
  <div :class="classes">
    <h1>这是card组件</h1>
  </div>
</template>
<script>
const prefixCls = "lg-card";
export default {
  name: "card",
  data() {
    return {};
  },
  computed:{
    classes(){
      return[
        prefixCls
      ]
    }
  },
  methods: {}
};
</script>
