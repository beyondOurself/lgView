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
    gap:[String,Number], 
    spacing:[String,Number]
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
      if(this.gap){
         style["padding"] =this.p2r(this.gap);
      }
      if(this.spacing){
         style["margin"] = this.p2r(this.spacing);
      }
      return style;
    }
  },
  methods: {}
};
</script>
