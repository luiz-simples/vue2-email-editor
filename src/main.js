import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import VueRouter from 'vue-router'
import Example from './views/Example.vue';
import DesignList from './views/DesignList.vue';
import DesignEdit from './views/DesignEdit.vue';
import App from './App.vue'

Vue.use(VueCompositionAPI)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Example },
    { path: '/dashboard', component: DesignList },
    { path: '/dashboard/new', component: DesignEdit },
    { path: '/dashboard/edit/:designId', component: DesignEdit },
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
