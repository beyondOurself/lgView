<template>
    <div>
        <lg-button></lg-button>
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