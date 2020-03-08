<template>
  <div :class="classes" :style="styles">
    <div :class="labelWrapClasses" :style="labelStyles">
      <label :class="labelClasses" v-text="label" ></label>
    </div>
    <div :class="inputWrapClasses" :style="inputStyles">
      <input :class="inputClasses" :value="currentValue" @input="handleInput" type="text" :placeholder="placeholder" :readonly="readonly" />
    </div>
    <i :class="iconClasses" @click="handleClick" v-if="icon"></i>
  </div>
</template>
<script>
const prefixCls = "lg-input-row";
const iconPrefixCls = "lg-icon";
export default {
  name: "LInputRow",
  props: {
    label:{
      type:String,
      default:"默认"
    },
    icon: {
      type: String
    },
    placeholder:{
      type:String,
      default:"请输入"
    },
    labelFlex: {
      type: Number
    },
    inputFlex: {
      type: Number
    },
    readonly:{
      type:Boolean
    },
    value:{
      type:String
    }
  },
  data() {
    return {
      currentValue:""
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
        {[`${iconPrefixCls}-${this.icon}`]:!!this.icon},
        {[`${iconPrefixCls}-ios-arrow-forward`]:this.icon === 'select'},
      ];
    },
    styles() {
      let style = {};

      return style;
    },
    labelStyles() {
      let style = {};
      if(this.labelFlex) style['flex'] = this.labelFlex;
      return style;
    },
    inputStyles() {
      let style = {};
      if(this.inputFlex) style['flex'] = this.inputFlex;
      return style;
    }
  },
  watch: {
    value(val){
        if(val){
          this.currentValue = this.value; 
        }
    },
    currentValue(val){
        if(val){
            this.value = this.currentValue; 
        }
    }
  },
  mounted() {
    console.log(">>>>>"+this.icon)
  },
  methods: {
    handleInput(){
       let val = event.target.value;
       if(val) this.$emit('input',val); 
    },
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>
