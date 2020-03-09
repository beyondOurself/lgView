<template>
  <div :class="classes" :style="styles">
    <slot></slot>
    <div :class="shadeClasss" v-if="readonly"></div>
  </div>
</template>
<script>
import {
  getChildrensByComponetName,
  setComponentPropertis,
  isFunction
} from "../../utils/util";
const prefixCls = "lg-input-group";
export default {
  name: "lInputGroup",
  props: {
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      groupReadonly: false
    };
  },
  watch: {
    readonly(v) {
      if (this.readonly) {
        this.refreshReadonly(v);
      } else {
        this.initChildrensReadonly();
      }
    }
  },
  computed: {
    classes() {
      return [prefixCls];
    },
    shadeClasss() {
      return [`${prefixCls}-shade`];
    },
    styles() {
      let style = {};

      return style;
    }
  },
  methods: {
    refreshReadonly(v) {
      let rows = this.getInputRows();
      setComponentPropertis(rows, { currentReadonly: v });
    },
    initChildrensReadonly() {
      let rows = this.getInputRows();
      for (const row of rows) {
        row.currentReadonly = row.readonly;
      }
    },
    getInputRows() {
      return getChildrensByComponetName(this, "lInputRow");
    }
  }
};
</script>
