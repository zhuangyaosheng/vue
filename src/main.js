import Vue from 'vue'
// import $ from 'jquery'
import App from './App'
import router from './router'
import store from './vuex'
import './vux'
import './rem'
import './config'
import './axios'

Vue.config.productionTip = false

Vue.prototype.back = (type) => {
  type == 'app' ? app.back() : router.go(-1);
}

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
