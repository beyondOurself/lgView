<template>
  <div>
    <lg-row center>
      <lg-col :flex="1" center>
        <lg-radio></lg-radio>
      </lg-col>
      <lg-col :flex="1" center>
        <lg-radio disabled></lg-radio>
      </lg-col>
      <lg-col :flex="1" center>
       <lg-checkbox label="狗蛋" v-model="goudan" >{{goudan}}</lg-checkbox>
      </lg-col>
      <lg-col :flex="1" center>
        <lg-checkbox-group><lg-checkbox label="狗娃" v-model="gouwa">{{gouwa}}</lg-checkbox></lg-checkbox-group> 
      </lg-col>
      <lg-col :flex="1" center>
       <lg-checkbox label="狗剩" disabled>狗剩剩</lg-checkbox>
      </lg-col>
    </lg-row>
    <hr />
    <lg-table :data="datas"></lg-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
      goudan:false,
      gouwa:false,
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
<style lang="less" >
</style>