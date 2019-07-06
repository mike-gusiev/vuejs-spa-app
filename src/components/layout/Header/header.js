export default {
  name: 'Header',
  created () {
    this.$store.commit('user/startedLogin')
  },
  computed: {
    isLogin () {
      return this.$store.state.user.isLogin
    },
    userName () {
      let user = JSON.parse(localStorage.getItem('User'))
      return user.name
    }
  },
  methods: {
    handleExit () {
      this.$store.commit('user/changeIsLogin', false)
      localStorage.removeItem('User')
    }
  }
}
