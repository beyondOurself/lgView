import Vue from 'vue'
import App from './lab.vue'
import {Explain} from  './compoents'
import VueRouter from 'vue-router'
import routers from './routers/lab'
import ElementUI from 'element-ui';
import  HighLisht from './plugins/highlight'
import 'element-ui/lib/theme-chalk/index.css';
import './lab.less'; 
const comCssPrefix = 'Lg';
let compoents = {
  Explain
}
Object.keys(compoents).forEach(key => {
  Vue.component(`${comCssPrefix}${key}`, compoents[key]);
})
Vue.use(HighLisht);
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
