<template>
  <div>
    <lg-list></lg-list>
    <lg-list-item></lg-list-item>
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