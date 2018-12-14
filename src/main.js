import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'assets/scss/index.scss'
import 'swiper/dist/css/swiper.css'

Vue.use(VueLazyload, {
	preLoad: 1,
	error: require('assets/img/error.png'),
	loading: require('assets/img/loading.gif'),
	attempt: 1
})

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
