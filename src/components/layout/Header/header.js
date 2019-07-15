import { mapState, mapMutations } from 'vuex'
import { USER_CHECK_LOGIN_STATUS, SIGN_IN_LOG_OUT } from '../../../store/modules/login/mutation-types'

export default {
  name: 'Header',

  created () {
    this.checkLoginStatus()
  },

  computed: {
    ...mapState('login', ['isLogin']),

    userName () {
      let user = JSON.parse(localStorage.getItem('User'))
      return user.name
    }
  },

  methods: {
    ...mapMutations({
      logOut: `login/${SIGN_IN_LOG_OUT}`,
      checkLoginStatus: `login/${USER_CHECK_LOGIN_STATUS}`
    }),

    handleExit () {
      this.logOut({ router: this.$router })
    }
  }
}
