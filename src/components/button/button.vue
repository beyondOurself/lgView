<template>
  <a :class="classes" :style="styles" v-text="value" @click="handleClick"></a>
</template>
<script>
import { isInArr } from "../../utils/util";
const prefixCls = "lg-button";
export default {
  name: "lButton",
  props: {
    value: {
      type: String,
      default: "默认"
    },
    display: {
      type: String,
      default: "inline",
      validator: v => {
        return isInArr(v, ["inline", "block"]);
      }
    },
    styler: {
      type: Object,
      default: () => {
        return {};
      }
    },
    type: {
      type: String,
      default: "default",
      validator: v => {
        return isInArr(v, [
          "default",
          "primary",
          "success",
          "warning",
          "danger",
          "text",
          "defaultG",
          "primaryG",
          "successG",
          "warningG",
          "dangerG"
        ]);
      }
    },
    size: {
      type: String,
      default: "normal",
      validator: v => {
        return isInArr(v, ["small", "normal", "large"]);
      }
    },
    color: {
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [
        prefixCls,
        {
          [`${prefixCls}-default`]: this.type === "default",
          [`${prefixCls}-primary`]: this.type === "primary",
          [`${prefixCls}-success`]: this.type === "success",
          [`${prefixCls}-warning`]: this.type === "warning",
          [`${prefixCls}-danger`]: this.type === "danger",
          [`${prefixCls}-text`]: this.type === "text",
          [`${prefixCls}-default-ghost`]: this.type === "defaultG",
          [`${prefixCls}-primary-ghost`]: this.type === "primaryG",
          [`${prefixCls}-success-ghost`]: this.type === "successG",
          [`${prefixCls}-warning-ghost`]: this.type === "warningG",
          [`${prefixCls}-danger-ghost`]: this.type === "dangerG",
          [`${prefixCls}-small`]: this.size === "small",
          [`${prefixCls}-large`]: this.size === "large"
        }
      ];
    },
    styles() {
      let style = this.styler,
        display = this.display,
          color = this.color;

      if (display) {
        let displayStr = "";
        switch (display) {
          case "block":
            displayStr = "block";
            break;
          default:
            displayStr = "inline-block";
            break;
        }
        style["display"] = displayStr;
      }

      if (color) {
        style["color"] = "white";
        style["backgroundColor"] = color;
      }

      return style;
    }
  },
  methods: {
    handleClick(val) {
      this.$emit("click", val);
    }
  }
};
</script>
