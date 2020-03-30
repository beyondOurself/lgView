<template>
    <div>
        <lg-row>
           <lg-col center> <lg-button  value="defalut"  type="default"></lg-button></lg-col>
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
        <lg-row style="background-color:#ccc; padding:10px 0">
           <lg-col center> <lg-button  display="block" type="defaultG"></lg-button></lg-col>
           <lg-col center > <lg-button value="primary" type="primaryG" ></lg-button></lg-col>
           <lg-col center> <lg-button value="success" type="successG" ></lg-button></lg-col>
           <lg-col center > <lg-button value="warning" type="warningG"></lg-button></lg-col>
        </lg-row>
         <br>
        <lg-row>
           <lg-col center> <lg-button  display="block" value="display:block" type="dangerG" @click="test">  </lg-button></lg-col>
           <lg-col center> <lg-button  display="inline" value="display:inline" type="dangerG" @click="test"></lg-button></lg-col>
        </lg-row>
        <hr />
        <lg-row>
           <lg-col center> <lg-button  value="size:small"  type="default" size="small" ></lg-button></lg-col>
           <lg-col center > <lg-button value="size:normal" type="primary" ></lg-button></lg-col>
           <lg-col center> <lg-button value="size:large" type="success" size="large"></lg-button></lg-col>
        </lg-row>
         <br>
        <lg-row>
           <lg-col center> <lg-button  value="color:green"  color="green" ></lg-button></lg-col>
           <lg-col center > <lg-button value="color:pink"  color="pink" ></lg-button></lg-col>
           <lg-col center> <lg-button value="default"></lg-button></lg-col>
        </lg-row>
         <br>
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
       window.alert("触发按钮的点击事件~")
    }
  }
};
</script>