import Vue from 'vue'
import Vuex from 'vuex'
import tree from './modules/tree'
import feature from './modules/feature'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  modules: {
    tree,
    feature
  },
  strict: debug,
})
