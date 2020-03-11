<template>
  <label :class="wrapClasses" :style="wrapStyles">
    <span :class="radioClasses">
      <input
        type="radio"
        :class="inputClasses"
        :checked="checkedValue | getCheckedValue"
        :value="label"
        :disabled="disabled"
        :name="getGroupId"
        @change="handleChange"
      />
      <span :class="innerClasses" :style="innerStyles" ></span>
    </span>
    <span :class="labelClasses">
      <slot>{{ label }}</slot>
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
      isGroup: !!parent
    };
  },
  watch: {
    value() {}
  },
  filters: {
    getCheckedValue(val) {
      return isBoolean(val) ? val : false;
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
      if(this.size && !this.isGroup){
        style["padding"] = this.p2r(this.size);
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

      if (this.isGroup) {
        // 组合使用
        result = optionValue;
        //设置group 的value
        if (this.parent) {
          this.parent.currentValue = result;
        } else {
          console.warn("There is no parent");
        }
      } else {
        // 单独使用
        result = optionChecked;
      }

      this.$emit("input", result);
    },
    getParent() {
      this.parent = getParentByComponentNames(this, "lRadioGroup");
    }
  },
  mounted() {
    this.getParent();
  }
};
</script>
