<template>
  <div :class="classes" :style="styles">
    <h3>input-row</h3>
  </div>
</template>
<script>
const prefixCls = "lg-input-row";
export default {
  name: "LInputRow",
  props: {},
  data() {
    return {};
  },
  computed: {
    classes() {
        return[prefixCls,{}] 
    },
    styles() {
       let style = {}

       return style
    }
  },
  methods: {}
};
</script>
