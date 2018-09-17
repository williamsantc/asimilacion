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
  apiKey: "AIzaSyAYQTRy-m2YwR3Azh3tOCM9wMZbyYe1dxM",
  authDomain: "asimilacion-2e1a4.firebaseapp.com",
  databaseURL: "https://asimilacion-2e1a4.firebaseio.com",
  projectId: "asimilacion-2e1a4",
  storageBucket: "asimilacion-2e1a4.appspot.com",
  messagingSenderId: "272143747956"
}
firebase.initializeApp(config)
firebase.firestore().settings( { timestampsInSnapshots: true })

export const db = firebase.firestore()

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
