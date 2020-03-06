<template>
  <div :class="classes" :style="styles">
     <h1>lg-list</h1>
  </div>
</template>
<script>
const prefixCls = "lg-list";
export default {
  name: "lList",
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
