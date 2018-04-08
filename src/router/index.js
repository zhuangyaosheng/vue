import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: {
        title: 'HelloWorld',
        keepAlive: true
      },
      component: resolve => require(['@/components/HelloWorld'], resolve)
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
})

router.beforeEach((to, from, next) => {
  setTitle(to, from, next);
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})

let setTitle = function (to, from, next) {
  let newTitle = to.meta.title;
  if (newTitle) {
    document.title = newTitle;
    store.commit('setTitle', newTitle);
  }
}

export default router

