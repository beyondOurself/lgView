<template>
  <div>
    <lg-row>
      <lg-icon type="md-albums" color="red"></lg-icon>
      <lg-icon type="md-albums" size="28" color="green"></lg-icon>
      <lg-icon type="md-albums" size="38" color="blue"></lg-icon>
    </lg-row>
    <hr />
    <lg-table :data="datas"></lg-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [
        {
          property: "type",
          declare: "图标的名称",
          mold: "String",
          default: "-"
        },
        {
          property: "size",
          declare: "图标的大小(单位pr)",
          mold: "Number, String",
          default: "-"
        },
        {
          property: "color",
          declare: "图标的颜色",
          mold: "String",
          default: "-"
        },
        {
          property: "custom",
          declare: "其他图标类名",
          mold: "String",
          default: "-"
        }
      ]
    };
  }
};
</script>