<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import {
  findComponentsDownward,
  setComponentPropertis,
  isArray,
  isInArr
} from "../../utils/util";
const prefixCls = "lg-checkbox-group";
export default {
  name: "lCheckboxGroup",
  props: {
    value: {
      type: [String, Number, Array]
    },
    size: {
      type: String,
      default: "normal",
      validator: val => {
        return isInArr(val, ["small", "normal", "large"]);
      }
    }
  },
  data() {
    return {
      currentValue: this.value,
      childrens: []
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    size(val){
      this.refreshSize(val,true)
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
      let childrens = findComponentsDownward(this, "lCheckbox");
      return isArray(childrens) && childrens.length > 0
        ? (this.childrens = childrens)
        : null;
    },
    refreshValue() {
      let checkboxs = this.childrens,
        resultArr = [];
      if (checkboxs) {
        checkboxs.forEach((checkbox, index) => {
          let labelVal = checkbox.label;
          let checkedVal = checkbox.currentChecked;

          if (labelVal && checkedVal) {
            resultArr.push(labelVal);
          }
        });
      }
      this.$emit("input", resultArr);
    },
    refreshSize(val,sizeTag) {
      let checkboxs = this.getChildrens();
      if (checkboxs && (this.size !== "normal"|| sizeTag)) {
        setComponentPropertis(checkboxs, { currentSize: val });
      }
    },
    initGroupValue() {
      let valArr = this.currentValue;
      if (!isArray(valArr)) {
        valArr = [valArr];
      }

      let checkboxs = this.childrens;
      if (checkboxs) {
        for (const checkbox of checkboxs) {
          let labelVal = checkbox.label;
          if (
            valArr.some(el => {
              return el == labelVal;
            })
          ) {
            checkbox.currentChecked = true;
          }
        }
      }
    }
  },
  mounted() {
    this.getChildrens();
    this.initGroupValue();
  }
};
</script>
