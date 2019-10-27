import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import B1 from './components/B1/B1.vue';
import B2 from './components/B2/B2.vue';
import B3 from './components/B3/B3.vue';
import B4 from './components/B4/B4.vue';
import B1Info from './components/B1/B1Info.vue'
import B2Info from './components/B2/B2Info.vue'
import B3Ff from './components/B3/B3Ff.vue'
import B3Js from './components/B3/B3Js.vue'
import B3Info from './components/B3/B3Info.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/weicaichuli',
      name: 'weicaichuli',
      component: B1,
    },
    {
      path: '/wcclinfo',
      name: 'wcclinfo',
      component: B1Info,
    },
    {
      path: '/gaowenmenpeng',
      name: 'gaowenmenpeng',
      component: B2,
    },
    {
      path: '/gwmpinfo',
      name: 'gwmpinfo',
      component: B2Info,
    },
    {
      path: '/tips',
      name: 'tips',
      component: B3,
    },
    {
      path: '/bcff',
      name: 'bcff',
      component: B3Ff,
    },
    {
      path: '/zzjs',
      name: 'zzjs',
      component: B3Js,
    },
    {
      path: '/info',
      name: 'info',
      component: B3Info,
    },
    // {
    //   path: '/my',
    //   name: 'my',
    //   component: B4,
    // },
  ]
})
