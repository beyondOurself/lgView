<template>
  <div>
    <lg-row center>
      <!-- <lg-col :flex="1" center>
        <lg-radio></lg-radio>
      </lg-col>
      <lg-col :flex="1" center>
        <lg-radio disabled></lg-radio>
      </lg-col>-->
      <lg-col :flex="1" >
        <lg-checkbox label="狗蛋" v-model="goudan">{{goudan}}</lg-checkbox>
      </lg-col>
      <lg-col :flex="1" center>
        <lg-checkbox-group>
          <lg-checkbox v-model="gouwa">{{gouwa}}</lg-checkbox>
        </lg-checkbox-group>
      </lg-col>
      <lg-col :flex="1" center>
        <lg-checkbox label="狗剩" disabled>狗剩剩</lg-checkbox>
      </lg-col>
    </lg-row>
    <lg-checkbox-group v-model="checkedNames">
      <lg-row center>
        <lg-col :flex="1" center>
          <lg-checkbox label="狗蛋蛋" size="small" >狗蛋</lg-checkbox>
        </lg-col>
        <lg-col :flex="1" center>
          <lg-checkbox label="狗剩剩">狗剩</lg-checkbox>
        </lg-col>
        <lg-col :flex="1" center>
          <lg-checkbox label="狗娃娃" size="large">狗娃</lg-checkbox>
        </lg-col>
      </lg-row>
    </lg-checkbox-group>
    <lg-row center>{{checkedNames}}</lg-row>
    <hr />
    <lg-table :data="datas"></lg-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goudan: false,
      gouwa: false,
      goudan1: "狗蛋",
      gouwa1: "狗娃",
      checkedNames: ["狗蛋蛋", "狗剩剩"],
      checkedNames1: [],
      datas: [
        {
          property: "value(checkbox)",
          declare: "单独使用时候绑定(true | false)",
          mold: "boolean",
          default: "false"
        },
        {
          property: "label(checkbox)",
          declare: "组使用的时候绑定的值",
          mold: "String",
          default: "--"
        },
        {
          property: "disabled(checkbox)",
          declare: "是否无效",
          mold: "boolean",
          default: "false"
        },
        {
          property: "size(checkbox)",
          declare: "尺寸大小, 优先级比group低,包含以下值[small,normal,large ] ",
          mold: "String",
          default: "normal"
        },
        {
          property: "value(group)",
          declare: "组的值 ",
          mold: "String",
          default: "--"
        },
        {
          property: "size(group)",
          declare: "组成员的尺寸大小,包含以下值[small,normal,large ]",
          mold: "String",
          default: "--"
        }
      ]
    };
  },
  mounted() {
    console.log(">>>" + this.checkedNames);
  }
};
</script>
<style lang="less" >
</style>