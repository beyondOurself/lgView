
<template>
  <div class="box">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view class="router-view-block"></router-view>
    <nav >
      <ul class="box-ul" >
        <li v-for="(item,index) in items" :key='index'>
          <router-link :to="item">{{item}}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import rous from './routers'
const nameList = []; 
 for (const key in rous) {
   if (rous.hasOwnProperty(key)) {
       nameList.push(`/${key}`);
   }
 }
export default {
  data() {
    return {
      items:nameList
    };
  }
};
</script>
<style lang='less' >
//局部样式
.box {
  .box-ul {
  text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding:0; 
  }
  .box-ul > li {
    list-style: none;
    background-color: aquamarine;
    border-radius: 0.1rem;
    margin: 0.1rem;
    padding: 0.1rem 5%;
    white-space: nowrap;
  }
  a {
    text-decoration: none;
  }
  .router-view-block {
    background-color: #eaff56;
    padding: 0.5rem 0;
  }
}
</style>