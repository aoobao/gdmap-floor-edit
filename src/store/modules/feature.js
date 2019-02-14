const state = {
  pointList: [],
  dragId: null
}
const getters = {
  pointList: state => {
    return state.pointList
  },
  dragId: state => {
    return state.dragId
  },
  dragPoint: state => {
    if (state.dragId == null) return null
    let dragPoint = state.pointList.find(t => t.id == state.dragId)
    return dragPoint || null
  }
}

const mutations = {
  setPointList(state, list) {
    state.pointList = list
  },
  setDragId(state, id) {
    state.dragId = id
  },
  setPointXY(state, {
    id,
    x,
    y
  }) {
    let point = state.pointList.find(t => t.id == id)
    if (!point) {
      console.warn('没有找到点位id:', id)

    } else {
      point.longitude = x
      point.latitude = y
    }
  }
}
const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
