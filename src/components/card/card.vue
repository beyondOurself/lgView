<template>
   <div :class="classes" :style="styles"><slot></slot></div>
</template>
<script>
const prefixCls = "lg-card";
export default {
  name: "Card",
  props:{
    styleBox:{
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
      if(this.pad){
         this.styleBox.padding =this.p2r(this.pad);
      }
      if(this.mar){
         this.styleBox.margin = this.p2r(this.mar);
      }
      return this.styleBox;
    }
  },
  methods: {}
};
</script>
