import Vue from 'vue'
import Router from 'vue-router'

import HW from '@/components/hw.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import WoAiNi from '@/components/woaini.vue'
import List from '@/components/List.vue'

Vue.use(Router)

const routes = [
  { path: '/', component: HW },
  { path: '/hello', component: HelloWorld },
  { path: '/wan', component: WoAiNi },
  { path:'/list',component:List}
]

export default new Router({
  routes
})
