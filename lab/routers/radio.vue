<template>
  <div>
    <lg-row center>
      <lg-col span="6" center>
        <lg-checkbox  >小黑</lg-checkbox>
      </lg-col>
      <lg-col span="6" center>
        <lg-radio v-model="gouwa" label="狗娃娃">{{gouwa}}</lg-radio>
      </lg-col>
      <lg-col span="12" center>
        <lg-radio label="狗蛋蛋" disabled>狗蛋</lg-radio>
      </lg-col>
    </lg-row>

    <hr />
    <lg-table :data="radioDatas"></lg-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gouwa: false,
      radioDatas: [
        {
          property: "value(radio)",
          declare: "单独使用时,radio绑定触发的结果(true | false)",
          mold: "Boolean",
          default: "false"
        },
        {
          property: "label(radio)",
          declare: "绑定的值,内容为空将显示label",
          mold: "String",
          default: "--"
        },
        {
          property: "disabled(radio)",
          declare: "radiod的原生属性,是否可用",
          mold: "Boolean",
          default: "false"
        },
        {
          property: "size(radio)",
          declare: "radiod的大小,基于基本尺寸的倍数缩放",
          mold: "Number",
          default: "5"
        },
        {
          property: "value(radio-group)",
          declare: "radio 组选择的值",
          mold: "String,number",
          default: ""
        },
        {
          property: "size(radio-group)",
          declare: "radio 组的大小,基于基本尺寸的倍数缩放",
          mold: "String,number",
          default: ""
        }
      ]
    };
  },
  watch: {
    gouwa(val) {
      console.log("变动~" + val);
    }
  },
  mounted() {
    console.log(this.gouwa);
  }
};
</script>
<style scoped lang="less">
</style>