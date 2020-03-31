<template>
  <div :class="classes" :style="styles" v-text="filler">我就是我</div>
</template>
<script>
const prefixClass = "lg-fills"
export default {
  props: {
    color:{
      type:String
    },
    filler:{
      type:String,
      default:"default"
    }
  },
  computed: {
    classes(){
       return [`${prefixClass}`,{[`${prefixClass}-color`]:this.color}]
    },
    styles(){
      let styler = {},
          color = this.color
      ; 
      if(color){
        styler["backgroundColor"]  =  color;
      }
      return styler
    }
  }
};
</script>