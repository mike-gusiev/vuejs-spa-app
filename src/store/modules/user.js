export const user = {
  namespaced: true,
  state: {
    isLogin: false
  },
  mutations: {
    changeIsLogin (state, isLogin) {
      state.isLogin = isLogin
    },
    checkLogin (state) {
      if (localStorage.getItem('User')) {
        state.isLogin = true
      }
    }
  }
}
