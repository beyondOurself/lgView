import App from './app.vue'
import lgView from '../src/index'
import VueRouter from 'vue-router'
// import '../src/utils/px2rem.js'
Vue.use(lgView, {
    capture: true
});
Vue.use(VueRouter);
//1.定义路由组件

// 2. 定义路由
const routes = [
  { path: '/my-component', component: (resolve) => require(['./routers/my-component.vue'], resolve) },
  { path: '/card', component: (resolve) => require(['./routers/card.vue'], resolve) },
  { path: '/icon', component: (resolve) => require(['./routers/icon.vue'], resolve) },
  { path: '/tag-area', component: (resolve) => require(['./routers/tag-area.vue'], resolve) },
]
// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

const lab = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
