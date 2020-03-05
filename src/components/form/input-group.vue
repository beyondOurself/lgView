<template>
  <div :class="classes" :style="styles">
    <h3>input-group</h3>
  </div>
</template>
<script>
const prefixCls = "lg-input-group";
export default {
  name: "",
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
