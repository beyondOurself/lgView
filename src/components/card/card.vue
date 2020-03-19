<template>
   <div :class="classes" :style="styles"><slot></slot></div>
</template>
<script>
const prefixCls = "lg-card";
export default {
  name: "Card",
  props:{
    styler:{
      type:Object, 
      default: () =>{ return {}}
    },
    pad:[String,Number], 
    mar:[String,Number]
  },
  data() {
    return {};
  },
  computed:{
    classes(){
      return[
        prefixCls
      ]
    },
    styles(){
      let style = this.styler; 
      if(this.pad){
         style["padding"] =this.p2r(this.pad);
      }
      if(this.mar){
         style["margin"] = this.p2r(this.mar);
      }
      return style;
    }
  },
  methods: {}
};
</script>
