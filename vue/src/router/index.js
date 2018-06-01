import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import PageEdit from '@/components/PageEdit'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      props: true
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1,
      props: true
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2,
      props: true
    },
    {
    path: '/edit/:id/:No/:uname/:password',
    name: 'Edit',
    component: PageEdit,
    props: true
  }
  ]
})
