<template>
  <div>
    <lg-input-group>
      <lg-input-row></lg-input-row>
    </lg-input-group>
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
          property: "-",
          declare: "-",
          mold: "-",
          default: "-"
        }
      ]
    };
  }
};
</script>