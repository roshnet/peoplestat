import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)
Vue.prototype.$store = vuex

export default new vuex.Store({
  state: {
    title: 'My shitty title'
  },
  mutations: {
    setTitle(state, val) {
        state.title = val
    }
  },
  actions: {

  }
})
