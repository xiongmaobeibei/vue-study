import Vue from 'vue'
import Router from 'vue-router'

import HW from '@/components/hw.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import WoAiNi from '@/components/woaini.vue'

Vue.use(Router)

const routes = [
  { path: '/', component: HW },
  { path: '/hello', component: HelloWorld },
  { path: '/wan', component: WoAiNi }
]

export default new Router({
  routes
})
