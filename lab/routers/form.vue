<template>
  <div>
    <lg-input-group>
      <lg-input-row icon="" v-model="value"  @click="handleClick()"></lg-input-row>
      <lg-input-row icon="select" :label-flex="2" :input-flex="2" placeholder="placeholder" readonly></lg-input-row>
    </lg-input-group>
    <hr />
    <lg-table :data="datas"></lg-table>
  </div>
</template>
<script>

export default {
  data() {
    return {
      value:"",
      datas: [
        {
          property: "label(row)",
          declare: "input的标签",
          mold: "String",
          default: "默认"
        },
        {
          property: "icon(row)",
          declare: "图标",
          mold: "String",
          default: "--"
        },
        {
          property: "placeholder(row)",
          declare: "input的原生属性placeholder",
          mold: "String",
          default: "请输入"
        },
        {
          property: "labelFlex(row)",
          declare: "标签的flex",
          mold: "Number",
          default: "1"
        },
        {
          property: "inputFlex(row)",
          declare: "input的flex",
          mold: "Number",
          default: "1"
        },
        {
          property: "readonly(row)",
          declare: "input的原生属性readonly",
          mold: "Boolean",
          default: "false"
        },
        {
          property: "readonly(row)",
          declare: "input的原生属性readonly",
          mold: "Boolean",
          default: "false"
        },
        {
          property: "value(row)",
          declare: "input的输入值",
          mold: "String",
          default: "--"
        },
      ]
    };
  },
  mounted() {
    console.log(this.value);
  },
  methods: {
    handleClick(){
      window.alert("触发了~"+this.value)
    }
  },
};
</script>