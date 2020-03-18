<template>
  <div :class="classes" :style="styles">
    <div :class="labelWrapClasses" :style="labelStyles" v-if="isShow">
      <label :class="labelClasses" v-text="label"></label>
    </div>
    <div :class="inputWrapClasses" :style="inputStyles" v-if="isShow">
      <input
        :type="type"
        :class="inputClasses"
        :value="currentValue"
        :placeholder="placeholder"
        :readonly="currentReadonly"
        @input="handleInput"
        v-if="type == 'text'"
      />
      <label :class="selectWrapClasses" v-if="type=='select'">
        <select :class="selectClasses" ref="selectEle" @change="handleSelect">
          <option disabled>请选择</option>
          <option
            v-for=" (item,index) in selectList "
            :key="index"
            :value="item.value"
          >{{item.text}}</option>
        </select>
        <i :class="selectIconClasses"></i>
      </label>
    </div>
    <i
      :class="iconClasses"
      @click="handleClick"
      ref="iconEle"
      v-if="icon && isShow && type !== 'select' "
    ></i>
    <slot></slot>
  </div>
</template>
<script>
import {
  isInArr,
  getParentByComponentNames,
  isFunction
} from "../../utils/util";
const prefixCls = "lg-input-row";
const iconPrefixCls = "lg-icon";
export default {
  name: "lInputRow",
  props: {
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: "默认"
    },
    placeholder: {
      type: String,
      default: "请输入"
    },
    icon: {
      type: String
    },
    labelFlex: {
      type: Number
    },
    inputFlex: {
      type: Number
    },
    readonly: {
      type: Boolean
    },
    value: {
      type: String
    },
    otherIcon: {
      type: String
    },
    selectList: {
      type: Array
    }
  },
  data() {
    return {
      currentValue: "",
      currentReadonly: this.readonly,
      isShow: true
    };
  },

  computed: {
    classes() {
      return [prefixCls, {}];
    },
    labelClasses() {
      return [`${prefixCls}-label`];
    },
    labelWrapClasses() {
      return [`${prefixCls}-label-wrap`];
    },
    inputClasses() {
      return [`${prefixCls}-input`];
    },
    inputWrapClasses() {
      return [`${prefixCls}-input-wrap`];
    },
    iconClasses() {
      return [
        `${iconPrefixCls}`,
        `${prefixCls}-icon`,
        {
          [`${iconPrefixCls}-${this.icon}`]:
            !!this.icon && !isInArr(this.icon, ["select"]),
          [`${iconPrefixCls}-ios-arrow-forward`]: this.icon === "select",
          [`${this.otherIcon}`]: this.icon === ""
        }
      ];
    },
    selectWrapClasses(){
       return[`${prefixCls}-select-wrap`]
    },
    selectClasses() {
      return [`${prefixCls}-select`];
    },
    selectIconClasses(){
      return[`${iconPrefixCls}`, [`${iconPrefixCls}-ios-arrow-forward`],`${prefixCls}-select-icon`]
    }, 
    styles() {
      let style = {};

      return style;
    },
    labelStyles() {
      let style = {};
      if (this.labelFlex) style["flex"] = this.labelFlex;
      return style;
    },
    inputStyles() {
      let style = {};
      if (this.inputFlex) style["flex"] = this.inputFlex;
      return style;
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.currentValue = this.value;
      }
    },
    currentValue(val) {
      if (val) {
        this.value = this.currentValue;
      }
    },
    readonly(val) {
      this.currentReadonly = val;
    }
  },

  methods: {
    handleInput() {
      let val = event.target.value;
      if (val) this.$emit("input", val);
    },
    handleClick() {
      this.$emit("click");
    },
    refreshReadonly() {
      const group = getParentByComponentNames(this, "lInputGroup");
      let groupReadonly = group.readonly;
      if (!groupReadonly) return;
      group.refreshReadonly(groupReadonly);
    },
    handleSelect() {
      let selectVal = event.target.value;
      this.$emit("input", selectVal);
    },
    setIsShow() {
      if (this.$slots.default) {
        this.isShow = false;
      }
    }
  },

  mounted() {
    this.refreshReadonly();
  },
  beforeDestroy() {
    this.refreshReadonly();
  }
};
</script>
