<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import {
  findComponentsDownward,
  setComponentPropertis,
  isInArr
} from "../../utils/util";
const prefixCls = "lg-radio-group";
export default {
  name: "lRadioGroup",
  props: {
    value: [String, Number],
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
    currentValue(val) {
      this.$emit("input", val);
    },
    size(val) {
      this.refreshSize(val, true);
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
      return (this.childrens = findComponentsDownward(this, "lRadio"));
    },
    setChecked() {
      let radios = this.getChildrens();
      if (radios) {
        radios.forEach((radio, index) => {
          if (this.currentValue === radio.label) {
            radio.checkedValue = true;
          }
        });
      }
    },
    refreshSize(val) {
      let radios = this.getChildrens();
      if (radios && (this.size !== "normal" || sizeTage)) {
        setComponentPropertis(radios, { currentSize: val });
      }
    }
  },
  mounted() {
    this.getChildrens();
    this.setChecked();
  }
};
</script>
