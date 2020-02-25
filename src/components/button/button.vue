<template>
  <div :class="classes" :style="styles">
    <h3>button组件</h3>
  </div>
</template>
<script>
const prefixCls = "lg-button";
export default {
  name: "Button",
  props: {
    type:String,
    default:'default',
    
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

       return style
    }
  },
  methods: {}
};
</script>
