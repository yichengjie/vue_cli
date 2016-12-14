// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
import User from './components/User.vue'
import EditForm from './components/EditForm.vue'
// const User = {
//   template: '<div>User {{ $route.params.id }}</div>'
// }
// 动态路径参数 以冒号开头
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/user/:id', component: User },
  { path: '/form', component: EditForm }
]
const router = new VueRouter({
  routes
})
new Vue({
  data: {
    formData: {
      name: 'test'
    }
  },
  router
}).$mount('#app')
// （缩写）相当于 routes: routes
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   render (h) {
//     // return <App/>
//     return h(App)
//   }
// })
