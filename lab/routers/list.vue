<template>
  <div>
    <lg-list border>
      <lg-list-item>
         <lg-list-template>
            <div slot="icon"><i></i></div>
            <div slot="title">title</div>
            <div slot="content">content</div>
            <div slot="footer">footer</div>
         </lg-list-template>
      </lg-list-item>
      <lg-list-item>222</lg-list-item>
    </lg-list>
    <hr />
    <lg-table :data="datas"></lg-table>
  </div>
</template>
<script>
export default {
  props:{
     iconStyle:{
       type:[Array,Object]
     },
     iconStyle:{
       type:[Array,Object]
     },
     iconStyle:{
       type:[Array,Object]
     },
     iconStyle:{
       type:[Array,Object]
     }
  },
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