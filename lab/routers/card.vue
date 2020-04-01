<template>
  <div>
    <lg-card>普通组</lg-card>
    <lg-card gap="10" spacing="20">测试组</lg-card>

    <hr />
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [
        {
          property: "pad",
          declare: "主体内边框(单位pr)",
          mold: "String,Number",
          default: "-"
        },
        {
          property: "mar",
          declare: "主体外边框(单位pr)",
          mold: "String,Number",
          default: "-"
        },
        {
          property: "styleBox",
          declare: "样式对象",
          mold: "Object",
          default: "{}"
        },
      ]
    };
  }
};
</script>