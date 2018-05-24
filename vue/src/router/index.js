import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import VueRouter from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    }
  ]
})
/*const router = new VueRouter({
  routes:[
    {path: '/',name: 'HelloWorld',component:HelloWorld},
    {path: '/page1',component:Page1}
  ]
})
export default new Vue({
  router
})*/
