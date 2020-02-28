<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import {isInArr,getChildrensByComponetName} from '../../utils/util'

const prefixCls = "lg-row";
export default {
  name: "lRow",
  props: {
     gutter:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
    };
  },
  computed: {
    classes() {
        return[prefixCls,{}] 
    },
    styles() {
       let style = {}
       
       this.gutter !== 0 && (style.marginLeft = `${this.gutter/-2}rem`)

       return style
    }
  },
  methods: {},
  mounted() {
  },
};
</script>
