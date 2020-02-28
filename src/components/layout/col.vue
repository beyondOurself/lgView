<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = "lg-col";
export default {
  name: "lCol",
  props: {
    span:[String,Number]
  },
  data() {
    return {};
  },
  computed: {
    classes() {
        return[prefixCls,{}] 
    },
    styles() {
       let style = {}
      if(this.span){
        style.width = `${+this.span/24*100}%`;
      }
      
      
       return style
    }
  },
  methods: {},
  mounted() {
    
  }
};
</script>
