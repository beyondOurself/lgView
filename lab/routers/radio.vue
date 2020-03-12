<template>
  <div>
    <hr />
    <lg-row>
      <lg-col span="12">
        <lg-row center>
          <lg-radio v-model="selectRes" label="apple" :size="1">
            <lg-icon type="logo-octocat"></lg-icon>
            <span>{{selectRes}}</span>
          </lg-radio>
        </lg-row>
      </lg-col>
      <lg-col span="12">
        <lg-row center>
          <lg-radio disabled>disabled</lg-radio>
        </lg-row>
      </lg-col>
    </lg-row>
    <hr />
    <lg-radio-group v-model="groupValue" :size=".8">
      <lg-row>
        <lg-col :flex="1">
          <lg-row center>
            <lg-radio v-model="gouwa"  label="狗娃">
              <lg-icon type="logo-octocat"></lg-icon>
              <span>{{gouwa}}</span>
            </lg-radio>
          </lg-row>
        </lg-col>
        <lg-col :flex="1">
          <lg-row center>
            <lg-radio v-model="goudan"  label="狗蛋">
              <lg-icon type="logo-octocat"></lg-icon>
              <span>{{goudan}}</span>
            </lg-radio>
          </lg-row>
        </lg-col>
      </lg-row>
    </lg-radio-group>
    <hr />
    <lg-table :data="radioDatas"></lg-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectRes:false,
      groupValue:"狗蛋", 
      gouwa:"狗娃娃",
      goudan:"狗蛋蛋",
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
  }
};
</script>
<style scoped lang="less">
</style>