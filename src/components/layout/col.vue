<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import {
  getParentByComponentNames,
  isZero,
  isFunction
} from "../../utils/util";

const prefixCls = "lg-col";
export default {
  name: "lCol",
  props: {
    span: [String, Number],
    offset: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    order: {
      type: Number,
      default: 0
    },
    flex: {
      type: Number,
      default: 1
    },
    center:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      gutter: 0,
      parentType: "",
      base: 0
    };
  },
  computed: {
    classes() {
      return [prefixCls, {[`${prefixCls}-center`]:this.center }];
    },
    styles() {
      let style = {};
      if (this.span) {
        style.width = this.conversionRatio(this.span, this.base);
      }

      if (!isZero(this.gutter)) {
        style.paddingLeft = this.p2r(this.gutter / 2);
        style.paddingRight = this.p2r(this.gutter / 2);
      }

      if (!isZero(this.offset)) {
        style.marginLeft = this.conversionRatio(this.offset, this.base);
      }

      if (!isZero(this.push)) {
        style.marginRight = this.conversionRatio(this.push, this.base);
      }

      if (!isZero(this.order)) {
        style.order = this.order;
      }

      if (!isZero(this.flex)) {
        style["flex"] = this.flex;
      }

      return style;
    }
  },
  methods: {
    refreshGutter() {
      this.beforeRun(row => row.refreshGutter(row.gutter));
    },
    refreshType() {
      this.beforeRun(row => row.refreshType(row.type));
    },
    refreshBase() {
      this.beforeRun(row => row.refreshBase(row.base));
    },
    conversionRatio(v, cardinalV) {
      return `${(+v / cardinalV) * 100}%`;
    },
    beforeRun(fun) {
      if (!isFunction(fun)) return;
      const row = getParentByComponentNames(this, "lRow");
      if (row) {
        fun(row);
      }
    }
  },
  mounted() {
    this.refreshGutter();
    this.refreshType();
    this.refreshBase();
  },
  beforeDestroy() {
    this.refreshGutter();
    this.refreshType();
    this.refreshBase();
  }
};
</script>
