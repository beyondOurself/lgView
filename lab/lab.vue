<template>
  <div :class="classes">
    <div :class="headerClasses">
      <div class>
        <div class="logo"></div>
        <div class="navs">
          <ul>
            <li>
              <a href="#">组件</a>
            </li>
            <li>
              <a href="#">简历</a>
            </li>
            <li>
              <a href="#">关于</a>
            </li>
          </ul>
        </div>
        <div class="search">
          <input type="text" placeholder="搜索" />
        </div>
      </div>
    </div>
    <div :class="mainClasses">
      <div class="container-wrapper">
        <div class="container">
          <router-view></router-view>
          <!-- <span v-highlight>
            <pre>
                  <code>
                    
                  </code>
              </pre>
          </span>-->
        </div>
      </div>
      <div class="navigaters">
        <ul>
          <li class="navigater" v-for="(group,index) in datas" :key="index">
            <h3 v-text="group.grounpName"></h3>
            <template v-for="(category) in group.categories">
              <h5 v-text="category.title"></h5>
              <ul>
                <li v-for="(item,index) in category.items" :key="index">
                  <router-link :to="item.value" v-text="item.text"></router-link>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </div>
      <div class="directory"></div>
    </div>
    <div :class="footerClasses">
      <div class="footer-container">
        <div class="author">
          <span>沈灿龙@2020</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import datas from "./data/navigater.json";
const prefix = "home";
export default {
  data() {
    return {
      datas
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