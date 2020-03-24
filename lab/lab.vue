<template>
     <div class="container">
         <div class="nav"></div>
        <div class="main">
            

        </div>
        <div class="footer"></div>
     </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" >
   body,html {
       margin: 0; 
       padding: 0; 
       height: 100%;
       font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
   }
  .container {
    height: 100%;
     .nav{
        height: 10%; 
        background-color: red;
     }
     .main{
       height: 100%;
       background-color: green;
     }
     .footer{
       height: 100px;
       background-color: black;
     }
  }
</style>