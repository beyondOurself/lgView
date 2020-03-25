import Vue from 'vue'
import App from './lab.vue'
import lgView from '../src/index'
import VueRouter from 'vue-router'
import routers from './routers'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  HighLisht from './plugins/highlight'
import './lab.less'; 
Vue.use(HighLisht);
Vue.use(lgView, {
  capture: true
});
Vue.use(VueRouter);
Vue.use(ElementUI);
//路由的配置
const routes = [];
Object.keys(routers).forEach(key => {
  routes.push({ path: `/${key}`, component: routers[key] });
})
const router = new VueRouter({
  routes 
})
const lab = new Vue({
  router,
  render: h => h(App)
}).$mount('#lab')
