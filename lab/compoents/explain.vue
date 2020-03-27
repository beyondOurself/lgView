<template>
  <div :class="Classes">
    <div :class="descriptionClasses">
      <div :class="contentWrapClasses">
        <span v-text="title"></span>
        <div :class="contentClasses">
          <slot></slot>
        </div>
      </div>
    </div>
    <div :class="codeClasses">
      <pre v-highlight>
            <code v-text="data">
           </code>
       </pre>
    </div>
  </div>
</template>
<script>
const prefixClass = "lg-explain";
export default {
  props: {
    title: {
      type: String,
      default: "基础用法"
    },
    data:{
        type:String
    }
  },
  computed: {
    Classes() {
      return [`${prefixClass}`];
    },
    descriptionClasses() {
      return [`${prefixClass}-description`];
    },
    contentWrapClasses() {
      return [`${prefixClass}-description-content-wrap`];
    },
    contentClasses() {
      return [`${prefixClass}-description-content`];
    },
    codeClasses() {
      return [`${prefixClass}-code`];
    }
  },
};
</script>
