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
  name: "TagArea",
  props: {
    label: {
      type: String,
      default: "无标题"
    },
    mar: {
      type: [String, Number]
    },
    styleBox:{
      type:Object,
       default: () => { return {}}
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
      let style = this.styleBox;
      if (this.mar) {
        style.margin = this.p2r(this.mar);
      }
      return style;
    }
  },
  methods: {}
};
</script>
