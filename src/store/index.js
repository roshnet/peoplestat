import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)
Vue.prototype.$store = vuex

export default new vuex.Store({
  state: {
    scores: [5, 5, 5]
  },
  mutations: {
    setScore(state, qObject) {
      state.scores[qObject.idx] = qObject.score
    }
  }
})
