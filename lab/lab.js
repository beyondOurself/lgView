import Vue from 'vue'
import App from './lab.vue'
import lgView from '../src/index'
import VueRouter from 'vue-router'
import routers from './routers'

console.log(Vue)

Vue.use(lgView, {
  capture: true
});
Vue.use(VueRouter);

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
