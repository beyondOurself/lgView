
<template>
  <div class="box">
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view class="rv-block"></router-view>
    <nav>
      <ul>
        <li>
          <router-link to="/my-component">测试组件</router-link>
        </li>
        <li>
          <router-link to="/card">card组件</router-link>
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
<style lang='less'>
body {
  font-size: 0.34rem;
}
</style>
<style lang='less' >
//局部样式
.box {
  text-align: center;
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  ul > li {
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