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
  props: {},
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

       return style
    }
  },
  methods: {},
  mounted() {
    console.log(getChildrensByComponetName(this,'lCol').length)
  },
};
</script>
