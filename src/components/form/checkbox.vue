<template>
  <label :class="classes">
    <span :class="wrapClasses">
      <input
        type="checkbox"
        :value="label"
        :class="inputClasses"
        :disabled="disabled"
        :checked="currentChecked"
        @change="handleChange"
      />
      <div :class="standinClasses" :style="standinStyles"></div>
    </span>
    <span :class="labelClasses" v-if="label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>
<script>
import { isBoolean, getParentByComponentNames } from "../../utils/util";
import checkboxVue from "../../../lab/routers/checkbox.vue";
const prefixCls = "lg-checkbox";
const prefixIconCls = "lg-icon";
export default {
  name: "lCheckbox",
  props: {
    value: {
      type: [String, Number, Boolean]
    },
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isExistGroup: false,
      group: null,
      currentChecked: this.value,
      currentValue: this.value
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
    }
  },
  filters: {
    checkedFilter(val) {
      return !isExistGroup && isBoolean(val) ? val : false;
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
        { [`${prefixCls}-standin-disabled`]: this.disabled }
      ];
    },
    labelClasses() {
      return [`${prefixCls}-label`];
    },
    standinStyles() {}
  },
  methods: {
    setGroup() {
      let group = getParentByComponentNames(this, "lCheckboxGroup");
      this.isExistGroup = !!group;
      if (group) this.group = group;
    },
    handleChange() {
      let target = event.target,
        checkedVal = target.checked,
        checkboxVal = target.value,
        resultVal = "";
      if (this.isExistGroup) {
        resultVal = checkboxVal;
      } else {
        resultVal = checkedVal;
      }

      this.$emit("input", resultVal);
    }
  },
  mounted() {
    this.setGroup();
  },
  beforeDestroy() {}
};
</script>
