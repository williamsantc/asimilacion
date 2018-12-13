// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
 

Vue.use(BootstrapVue)
Vue.use(VueFire)

window.toastr = require('toastr')
 
Vue.use(VueToastr2)

let config = {
  
}
firebase.initializeApp(config)
firebase.firestore().settings( { timestampsInSnapshots: true })

export const db = firebase.firestore()

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
  	next('/pages/404')
  } else {
  	next();
  }
})

// todo
// cssVars()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
