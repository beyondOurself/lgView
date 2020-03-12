<template>
  <label :class="wrapClasses" :style="wrapStyles">
    <span >
      <input
        type="radio"
        :class="inputClasses"
        :checked="checkedValue | getCheckedValue"
        :value="label"
        :disabled="disabled"
        :name="getGroupId"
        @change="handleChange"
      />
      <span :class="innerClasses" :style="innerStyles"></span>
    </span>
    <span :class="labelClasses" v-if="label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>
<script>
import { isBoolean, getParentByComponentNames } from "../../utils/util";
const prefixCls = "lg-radio";
export default {
  name: "lRadio",
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number
    }
  },
  data() {
    return {
      parent: {},
      checkedValue: this.value,
      currentSize: this.size
    };
  },
  watch: {
    size(val) {
      this.currentSize = val;
    }
  },
  filters: {
    getCheckedValue(val) {
      return isBoolean(val) && val === true ? val : false;
    }
  },
  computed: {
    wrapClasses() {
      return [`${prefixCls}-wrap`];
    },
    radioClasses() {
      return [`${prefixCls}-radio`];
    },
    innerClasses() {
      return [
        `${prefixCls}-inner`,
        { [`${prefixCls}-inner-disabled`]: this.disabled }
      ];
    },
    labelClasses() {
      return [`${prefixCls}-label`];
    },
    inputClasses() {
      return [`${prefixCls}-input`];
    },
    wrapStyles() {
      let style = {};

      return style;
    },
    innerStyles() {
      let style = {};
      if (this.currentSize) {
        let baseWidth = 15,
          baseHeight = 15,
          basePadding = 4;
        style["width"] = this.p2r(baseWidth * this.currentSize);
        style["height"] = this.p2r(baseHeight * this.currentSize);
        style["padding"] = this.p2r(basePadding * this.currentSize);
      }

      return style;
    },

    getGroupId() {
      return this.parent ? `${this.parent._uid}_radio_name` : "";
    }
  },
  methods: {
    handleChange() {
      let target = event.target,
        optionChecked = target.checked,
        optionValue = target.value,
        result = "";

      if (!!this.parent) {
        // 组合使用
        result = optionValue;
        //设置group 的value
        if (this.parent) {
          this.parent.currentValue = result;
        } 

      } else {
        // 单独使用
        result = optionChecked;
      }

      this.$emit("input", result);
    },
    refreshSize() {
      let group = this.parent;
      group && group.refreshSize(group.size);
    },
    getParent() {
      this.parent = getParentByComponentNames(this, "lRadioGroup");
    }
  },
  mounted() {
    this.getParent();
    this.refreshSize();
  },
  beforeDestroy() {
    this.refreshSize();
  }
};
</script>
