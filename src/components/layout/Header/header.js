import { mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  created () {

  },
  computed: {
    ...mapState('login', ['isLogin']),

    userName () {
      let user = JSON.parse(localStorage.getItem('User'))
      return user.name
    }
  },

  methods: {
    ...mapActions('login', ['exitUser']),

    handleExit () {
      this.exitUser()
    }
  }
}
