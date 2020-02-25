<template>
  <div :class="classes" :style="styles">
    <table>
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for=" (row,rindex) in data " :key="rindex">
          <td v-for="(col,cindex) in row" v-text="col" :key="cindex"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
const prefixCls = "lg-table";
export default {
  name: "Table",
  props: {
    data: {
      type: Array,
      default:() => { return[
        { 
          property: "-",
          declare: "-",
          mold: "-",
          default: "-",
         }
      ]}
    }
  },
  data() {
    return {
    };
  },
  computed: {
    classes() {
      return [prefixCls, {}];
    },
    styles() {
      let style = {};

      return style;
    }
  },
  methods: {}
};
</script>
