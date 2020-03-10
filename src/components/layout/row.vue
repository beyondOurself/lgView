<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import {
  isInArr,
  getChildrensByComponetName,
  setComponentPropertis,
  isFunction
} from "../../utils/util";
import { log, isUndefined } from "util";
import { deflate } from "zlib";

const prefixCls = "lg-row";
export default {
  name: "lRow",
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: "grid",
      validator: t => isInArr(t, ["grid", "flex"])
    },
    base: {
      type: Number,
      default: 24
    },
    justify: {
      type: String,
      default: "start",
      validator: j =>
        isInArr(j, ["start", "end", "center", "space-around", "space-between"])
    },
    direction: {
      type: String,
      default: "row",
      validator: d =>
        isInArr(d, ["row", "row-reverse", "column", "column-reverse"])
    },
    wrap: {
      type: String,
      default: "nowrap",
      validator: w => isInArr(w, ["nowrap", "wrap", "wrap-reverse"])
    },
    items: {
      type: String,
      default: "start",
      validator: i => isInArr(i, ["start", "end", "center", "baseline"])
    },
    center: {
      type: Boolean
    }
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [prefixCls, {}];
    },
    styles() {
      let style = {};
      if (this.gutter) {
        style["marginLeft"] = this.p2r(this.gutter / -2);
        style["marginRight"] = this.p2r(this.gutter / -2);
      }

      if (this.justify) {
        let juStr = this.justify;
        switch (juStr) {
          case "end":
            juStr = "flex-end";
            break;
          case "center":
            juStr = "center";
            break;
          case "space-around":
            juStr = "space-around";
            break;
          case "space-between":
            juStr = "space-between";
            break;
            deflate: juStr = "flex-start";
            break;
        }
        style["justify-content"] = juStr;
      }

      if (this.direction) {
        let dirStr = this.direction;
        switch (dirStr) {
          case "row-reverse":
            dirStr = "row-reverse";
            break;
          case "column":
            dirStr = "column";
            break;
          case "column-reverse":
            dirStr = "column-reverse";
            break;
            deflate: dirStr = "row";
            break;
        }
        style["flex-direction"] = dirStr;
      }

      if (this.wrap) {
        let wraStr = this.wrap;
        switch (wraStr) {
          case "wrap":
            wraStr = "wrap";
            break;
          case "wrap-reverse":
            wraStr = "wrap-reverse";
            break;
            deflate: wraStr = "nowrap";
            break;
        }
        style["flex-wrap"] = wraStr;
      }

      if (this.items) {
        let iteStr = this.items;
        switch (iteStr) {
          case "center":
            iteStr = "center";
            break;
          case "end":
            iteStr = "flex-end";
            break;
          case "baseline":
            iteStr = "baseline";
            break;
            deflate: iteStr = "start";
            break;
        }
        style["align-items"] = iteStr;
      }

      if (this.center) {
        style["align-items"] = "center";
        style["justify-content"] = "center";
      }
      return style;
    }
  },
  methods: {
    refreshGutter(v = 0) {
      this.beforeRun(cols => {
        v !== 0 && setComponentPropertis(cols, { gutter: v });
      });
    },
    refreshType(v = "") {
      this.beforeRun(cols => {
        v !== "" && setComponentPropertis(cols, { parentType: v });
      });
    },
    refreshBase(v) {
      this.beforeRun(cols => {
        v !== 0 && setComponentPropertis(cols, { base: v });
      });
    },
    beforeRun(fun) {
      if (!isFunction) return;
      let cols = getChildrensByComponetName(this, "lCol");
      fun(cols);
    }
  },
  watch: {
    gutter(v) {
      //gutter refresh
      this.refreshGutter(v);
    },
    type(v) {
      this.refreshType(v);
    },
    base(v) {
      this.refreshBase(v);
    }
  },
  mounted() {}
};
</script>
