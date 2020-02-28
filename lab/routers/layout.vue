<template>
  <div>
    <lg-row style="background-color:gray;">
      <lg-col span="6" style="background-color:red;">1-1</lg-col>
      <lg-col span="6" style="background-color:green;">1-2</lg-col>
      <lg-col span="6" style="background-color:blue;">1-3</lg-col>
      <lg-col span="6" style="background-color:pink;">1-4</lg-col>
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