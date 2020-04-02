import Vue from 'vue'
import App from './lab.vue'
import {Explain,Table,Highlight,Fills,Container} from  './compoents'
import VueRouter from 'vue-router'
import routers from './routers/lab'
import  HighLisht from './plugins/highlight'
import './lab.less'; 
const comCssPrefix = 'Lg';
let compoents = {
  Explain,
  Table,
  Highlight,
  Fills,
  Container
}
Object.keys(compoents).forEach(key => {
  Vue.component(`${comCssPrefix}${key}`, compoents[key]);
})
Vue.use(HighLisht);
Vue.use(VueRouter);
//路由的配置
const routes = [];
Object.keys(routers).forEach(key => {
  routes.push({ path: `/${key}`, component: routers[key] });
})
routes.push({path:'/', redirect: '/install' })
const router = new VueRouter({
  routes 
})
const lab = new Vue({
  router,
  render: h => h(App)
}).$mount('#lab')
