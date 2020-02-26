
<template>
  <div class="box">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view class="rv-block"></router-view>
    <nav >
      <ul class="box-ul" >
        <li>
          <router-link to="/myComponent">测试组件</router-link>
        </li>
        <li>
          <router-link to="/card">card组件</router-link>
        </li>
        <li>
          <router-link to="/icon">icon组件</router-link>
        </li>
        <li>
          <router-link to="/tagArea">tag-area组件</router-link>
        </li>
        <li>
          <router-link to="/button">button组件</router-link>
        </li>
        <li>
          <router-link to="/table">table组件</router-link>
        </li>
        <li>
          <router-link to="/layout">layout组件</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
    margin: 0.2rem;
    padding: 0.2rem 10%;
    white-space: nowrap;
  }
  a {
    text-decoration: none;
  }
  .rv-block {
    background-color: #eaff56;
    padding: 0.5rem 0;
  }
}
</style>