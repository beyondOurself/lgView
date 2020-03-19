<template>
    <div>
        <lg-row>
           <lg-col center> <lg-button  display="block" type="default"></lg-button></lg-col>
           <lg-col center > <lg-button value="primary" type="primary" ></lg-button></lg-col>
           <lg-col center> <lg-button value="success" type="success" ></lg-button></lg-col>
           <lg-col center > <lg-button value="warning" type="warning"></lg-button></lg-col>
        </lg-row>
         <br>
        <lg-row>
           <lg-col center > <lg-button value="danger" type="danger" display="block" ></lg-button></lg-col>
           <lg-col center> <lg-button value="text" type="text" ></lg-button></lg-col>
        </lg-row>
         <br>
        <lg-row>
           <lg-col center> <lg-button  display="block" type="defaultG"></lg-button></lg-col>
           <lg-col center > <lg-button value="primary" type="primaryG" ></lg-button></lg-col>
           <lg-col center> <lg-button value="success" type="successG" ></lg-button></lg-col>
           <lg-col center > <lg-button value="warning" type="warningG"></lg-button></lg-col>
        </lg-row>
         <br>
        <lg-row>
           <lg-col center> <lg-button  display="block" value="danger" type="dangerG" @click="test"></lg-button></lg-col>
        </lg-row>
        <hr />
        <lg-row>
           <lg-col center> <lg-button  value="default"  type="default" size="small" ></lg-button></lg-col>
           <lg-col center > <lg-button value="primary" type="primary" ></lg-button></lg-col>
           <lg-col center> <lg-button value="success" type="success" size="large"></lg-button></lg-col>
        </lg-row>
         <br>
        <lg-row>
           <lg-col center> <lg-button  value="default"  color="green" ></lg-button></lg-col>
           <lg-col center > <lg-button value="primary"  color="pink" ></lg-button></lg-col>
           <lg-col center> <lg-button value="success"></lg-button></lg-col>
        </lg-row>
         <br>
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
  },
  methods:{
    test(){
       window.alert("触发了~")
    }
  }
};
</script>