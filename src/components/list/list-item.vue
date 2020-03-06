<template>
  <div :class="classes" :style="styles">
    lg-list-item
  </div>
</template>
<script>
const prefixCls = "lg-list-item";
export default {
  name: "lListItem",
  props: {},
  data() {
    return {};
  },
  computed: {
    classes() {
        return[prefixCls,{} ] 
    },
    styles() {
       let style = {}

       return style
    }
  },
  methods: {}
};
</script>
