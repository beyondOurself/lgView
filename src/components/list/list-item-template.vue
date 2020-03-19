<template>
  <div :class="classes" :style="styles">
    <div :class="mainClasses">
      <div class="icon" :style="iconStyler">
        <i :class="iconClasses" v-if="icon"></i>
        <slot name="icon"></slot>
      </div>
      <div class="content-wrap">
        <div class="title" :style="titleStyler">
          <h4 v-if="title" v-text="title"></h4>
          <slot name="title"></slot>
        </div>
        <div class="content" :style="contentStyler">
          <span v-if="content" v-text="content"></span>
          <slot name="content"></slot>
        </div>
      </div>
    </div>
    <div :class="footerClasses" :style="footerStyler">
      <span v-if="footerLeft" v-text="footerLeft"></span>
      <span v-if="footerRight" v-text="footerRight"></span>
      <slot name="footer"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = "lg-list-template";
const iconPrefixCls = "lg-icon";
export default {
  name: "lListTemplate",
  props: {
    icon: {
      type: String
    },
    iconStyler: {
      type: Object
    },
    title: {
      type: String
    },
    titleStyler: {
      type: Object
    },
    content: {
      type: String
    },
    contentStyler: {
      type: Object
    },
    footerLeft: {
      type: String
    },
    footerRight: {
      type: String
    },
    footerStyler: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [prefixCls];
    },
    mainClasses() {
      return [`${prefixCls}-main`, {}];
    },
    footerClasses() {
      return [`${prefixCls}-footer`, {}];
    },
    iconClasses() {
      return [
        `${iconPrefixCls}`,
        { [`${iconPrefixCls}-${this.icon}`]: this.icon }
      ];
    },
    styles() {
      let style = {};

      return style;
    }
  },
  methods: {}
};
</script>
