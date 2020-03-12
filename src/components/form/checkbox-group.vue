<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import {
  findComponentsDownward,
  setComponentPropertis
} from "../../utils/util";
const prefixCls = "lg-checkbox-group";
export default {
  name: "lCheckboxGroup",
  props: {
    value: [String, Number],
    size: {
      type: Number
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    classes() {
      return [prefixCls, {}];
    },
    styles() {
      let style = {};

      return style;
    }
  },
  methods: {},
  mounted() {}
};
</script>
