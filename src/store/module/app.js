const state = {
  isCollapse: false
}

const mutations ={
  SET_ISCOLLAPSE: (state,collapse) => {
    return state.isCollapse = collapse
  }
}

const actions = {
  switchSlidebar({commit},bool){
    commit('SET_ISCOLLAPSE',bool)
  }
}

export default {
  state,
  mutations,
  actions
}