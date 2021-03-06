// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import { rtdbPlugin } from 'vuefire'
import promise from 'es6-promise'
import autofocus from 'vue-autofocus-directive'
import VueGtag from 'vue-gtag'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vueHeadful from 'vue-headful'
import './registerServiceWorker'
Vue.component('vue-headful', vueHeadful)
Vue.directive('autofocus', autofocus)
Vue.use(VueAxios, axios)
Vue.use(VueGtag, {
  config: { id: 'UA-26178243-4' }
}, router)

promise.polyfill()
Vue.use(rtdbPlugin)

require('semantic-ui-css/semantic.css')
Vue.use(SuiVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
