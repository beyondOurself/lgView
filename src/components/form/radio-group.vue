<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import { findComponentsDownward } from "../../utils/util";
const prefixCls = "lg-radio-group";
export default {
  name: "lRadioGroup",
  props: {
    value: [String, Number]
  },
  data() {
    return {
      currentValue: "",
      childrens:[]
    };
  },
  watch:{
    value(){
      this.currentValue = this.value;
    }
  },
  computed: {
    classes() {
      return [prefixCls, {}];
    },
    styles() {
      let style = {};

      return style;
    }
  },
  methods: {
    getChildrens(){
      this.childrens = findComponentsDownward(this, "lRadio");
      //根据value 设置子组件的checked
    }, 
    setChecked() {
     
     
    }
  },
  mounted(){
    this.getChildrens();
    this.setChecked();
  }
};
</script>
