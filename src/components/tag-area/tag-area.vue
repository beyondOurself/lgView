<template>
  <div :class="classes" :style="styles">
     <span :class="titleClasses" v-text="label"></span>
     <slot>无内容</slot>
  </div>
</template>
<script>
const prefixCls = "lg-tag-area";
export default {
  name: "TagArea",
  props: {
    label:{
      type:String,
      default:'无标题'
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
       return[prefixCls]
    },
    titleClasses(){
      return [
        `${prefixCls}-title`
      ]
    },
    styles() {
      let style = {};

      return {}
    }
  },
  methods: {}
};
</script>
