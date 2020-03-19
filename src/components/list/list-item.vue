<template>
  <div :class="classes" :style="styles" @click="handleClick">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = "lg-list-item";
export default {
  name: "lListItem",
  props: {},
  data() {
    return {};
  },
  computed: {
    classes() {
      return [prefixCls, {}];
    },
    styles() {
      let style = {};

      return style;
    }
  },
  methods: {
    handleClick(val){
      this.$emit("click",val)
    }
  }
};
</script>
