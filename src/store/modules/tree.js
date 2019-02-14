const state = {
  activeTree: null
}
const getters = {
  activeTree: state => state.activeTree
}

const mutations = {
  setActiveTree(state, tree) {
    state.activeTree = tree
  }
}
const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
