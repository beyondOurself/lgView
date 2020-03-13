<template>
  <label :class="classes">
    <span :class="wrapClasses">
      <input
        type="checkbox"
        :value="label"
        :class="inputClasses"
        :disabled="disabled"
        :checked="currentChecked | checkedFilter"
        @change="handleChange"
      />
      <div :class="standinClasses" ref="standinEl"></div>
    </span>
    <span :class="labelClasses" >
      <slot>{{label}}</slot>
    </span>
  </label>
</template>
<script>
import {
  isInArr,
  isBoolean,
  getParentByComponentNames
} from "../../utils/util";
import checkboxVue from "../../../lab/routers/checkbox.vue";
const prefixCls = "lg-checkbox";
const prefixIconCls = "lg-icon";
export default {
  name: "lCheckbox",
  props: {
    value: {
      type: Boolean,
      default:false
    },
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
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
      isExistGroup: false,
      parent: null,
      currentChecked: this.value,
      currentValue: this.value,
      currentSize: this.size
    };
  },
  watch: {
    value(val) {
      if (val) {
        this.currentValue = val;
        if (!this.isExistGroup) {
          this.currentChecked = val;
        }
      }
    },
    size(val) {
      this.currentSize = val;
    },
    currentSize(){
    }
  },
  filters: {
    checkedFilter(val) {
      return isBoolean(val) ? val : false;
    }
  },
  computed: {
    classes() {
      return [`${prefixCls}`];
    },
    inputClasses() {
      return [`${prefixCls}-input`];
    },
    wrapClasses() {
      return [`${prefixCls}-wrap`];
    },
    standinClasses() {
      return [
        `${prefixCls}-standin`,
        {
          [`${prefixCls}-standin-disabled`]: this.disabled,
          [`${prefixCls}-standin-small`]: this.currentSize === "small",
          [`${prefixCls}-standin-large`]: this.currentSize === "large"
        }
      ];
    },
    labelClasses() {
      return [`${prefixCls}-label`];
    }
  },
  methods: {
    setGroup() {
      let group = getParentByComponentNames(this, "lCheckboxGroup");
      this.isExistGroup = !!group;
      if (group) this.parent = group;
    },
    handleChange() {
      let target = event.target,
        checkedVal = (this.currentChecked = target.checked),
        checkboxVal = target.value,
        resultVal = "";
      if (this.isExistGroup) {
        resultVal = checkboxVal;
        this.refreshGroupValue();
      } else {
        resultVal = checkedVal;
      }
      this.$emit("input", resultVal);
    },
    refreshGroupValue() {
      let parent = this.parent;
      if (parent) {
        parent.refreshValue();
      }
    },
    refreshGroupSize() {
      let parent = this.parent;
      if (parent) {
        parent.refreshSize(parent.size);
      }
    }
  },
  mounted() {
    this.setGroup();
    this.refreshGroupSize();
  }
};
</script>
