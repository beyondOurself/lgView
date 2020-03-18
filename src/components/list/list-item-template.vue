<template>
  <div :class="classes" :style="styles">
     <div :class="mainClasses" >
         <div class="icon"><slot name="icon"></slot></div>
         <div class="content-wrap">
               <div class="title"><slot name="title"></slot></div>
               <div class="content" > <slot name="content"></slot> </div>
         </div>
     </div>
     <div :class="footerClasses"><slot name="footer"></slot></div> 
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = "lg-list-template";
export default {
  name: "lListTemplate",
  props: {},
  data() {
    return {};
  },
  computed: {
    classes() {
      return [prefixCls];
    },
    mainClasses() {
      return [`${prefixCls}-main`,{}];
    },
    footerClasses() {
      return [`${prefixCls}-footer`,{}];
    },
    styles() {
      let style = {};

      return style;
    }
  },
  methods: {}
};
</script>
