<template>
  <div :class="classes" :style="styles">
    <div :class="contentClasses">
      <span :class="titleClasses" v-text="label"></span>
      <slot>--</slot>
    </div>
  </div>
</template>
<script>
const prefixCls = "lg-tag-area";
export default {
  name: "lTagArea",
  props: {
    label: {
      type: String,
      default: "无标题"
    },
    space: {
      type: [String, Number]
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [prefixCls];
    },
    titleClasses() {
      return [`${prefixCls}-title`];
    },
    contentClasses(){
      return[`${prefixCls}-content`]
    },
    styles() {
      let styler = {}, 
          space = this.space
          ;
      if (space) {
        styler.margin = this.p2r(space);
      }
      return styler;
    }
  },
  methods: {}
};
</script>
