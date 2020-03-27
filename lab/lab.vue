<template>
  <div :class="classes">
    <!-- 头部 -->
    <div :class="headerClasses">
      <div class>
        <div class="logo"></div>
        <div class="navs">
          <ul>
            <li v-for="(item,index) in nas" :key="index">
              <a href="#" v-text="item"></a>
            </li>
          </ul>
        </div>
        <div class="search">
          <input type="text" placeholder="搜索" />
        </div>
      </div>
    </div>
    <!-- 中间 -->
    <div :class="mainClasses">
      <div class="container-wrapper">
        <!-- 内容 -->
        <div class="container">
          <router-view> </router-view>
        </div>
      </div>
      <!-- 左侧导航 -->
      <div class="navigaters">
        <ul>
          <li class="navigater" v-for="(group,index) in datas" :key="index">
            <h3 v-text="group.grounpName"></h3>
            <div class="categories" v-for="(category,index) in group.categories" :key="index">
              <h5 v-text="category.title"></h5>
              <ul>
                <li v-for="(item,index) in category.items" :key="index">
                  <router-link :to="item.value" v-text="item.text"></router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部 -->
    <div :class="footerClasses " >
      <div class="footer-container baColor">
        <div class="author">
          <span>{{auther}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import datas from "./data/navigater.json";
import {nas,auther} from "./data/common.json";
const prefix = "home";
export default {
  data() {
    return {
      datas,
      auther,
      nas
    };
  },
  computed: {
    classes() {
      return [`${prefix}`];
    },
    headerClasses() {
      return [`${prefix}-header`];
    },
    mainClasses() {
      return [`${prefix}-main`];
    },
    footerClasses() {
      return [`${prefix}-footer`];
    }
  }
};
</script>