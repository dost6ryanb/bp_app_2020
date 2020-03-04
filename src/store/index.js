import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loader: false,
    snackbar: {
      text: '',
      color: '#000',
      timeout: 0,
      visible: false
    }
  },
  mutations: {
    showLoader(state) {
      state.loader = true
    },
    hideLoader(state) {
      state.loader = false
    },
    showSnackbar(state, payload = {}) {
      state.snackbar.text = payload.text || ''
      state.snackbar.color = payload.color || '#000'
      state.snackbar.timeout = payload.timeout || 0
      state.snackbar.visible = true
    },
    hideSnackbar(state) {
      state.snackbar.visible = false
    }
  },
  actions: {
  },
  modules: {
  }
})
