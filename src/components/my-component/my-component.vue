<template>
  <div :class="classes" :style="styles">
    <h3>测试组件</h3>
  </div>
</template>
<script>
const prefixCls = "";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  computed: {
    classes() {
        return[prefixCls,{}] 
    },
    styles() {
       let style = {}

       return style
    }
  },
  methods: {}
};
</script>
