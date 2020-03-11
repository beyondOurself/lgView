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
    value: [String, Number],
    size:{
      type:Number
    }
  },
  data() {
    return {
      currentValue: this.value,
      childrens: []
    };
  },
  watch: {
    value() {
      this.currentValue = this.value;
    },
    currentValue(val){
       this.$emit("input",val);
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
    getChildrens() {
      this.childrens = findComponentsDownward(this, "lRadio");
    },
    setChecked() {
      let radios = this.childrens;
      if (radios && radios.length > 0) {
        radios.forEach((radio, index) => {
            if(this.currentValue === radio.label){
               radio.checkedValue = true;
            }
        });
      }
    }
  },
  mounted() {
    this.getChildrens();
    this.setChecked();
  }
};
</script>
