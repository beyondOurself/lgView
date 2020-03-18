<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = "lg-list";
export default {
  name: "lList",
  props: {
    border:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [prefixCls, {
        [`${prefixCls}-border`] : this.border
      }];
    },
    styles() {
      let style = {};

      return style;
    }
  },
  methods: {}
};
</script>
