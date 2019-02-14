import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import View from './views/View.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: 'imageedit',
        name: 'imageedit',
        component: () => import( /* webpackChunkName: "imageedit" */ './views/ImageEdit.vue')
      }, {
        path: 'editmap',
        name: 'editmap',
        component: () => import( /* webpackChunkName : "editmap" */ './views/EditMap.vue')
      }]
    }, {
      path: '/view',
      name: 'view',
      component: View,
      children: [{
        path: 'viewmap',
        name: 'viewmap',
        component: () => import( /* webpackChunkName: "viewMap" */ './views/ViewMap.vue')
      }]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})