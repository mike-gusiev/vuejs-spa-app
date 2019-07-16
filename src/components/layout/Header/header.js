import { mapState, mapMutations, mapActions } from 'vuex'
import { USER_CHECK_LOGIN_STATUS, SIGN_IN_LOG_OUT } from '../../../store/modules/login/mutation-types'

export default {
  name: 'Header',

  created () {
    this.checkLoginStatus()
    if (localStorage.getItem('User')) {
      this.getCurrentUser(JSON.parse(localStorage.getItem('User')).id)
    }
  },

  computed: {
    ...mapState('login', ['currentUser']),
    ...mapState('login', ['isLogin'])
  },

  methods: {
    ...mapMutations({
      logOut: `login/${SIGN_IN_LOG_OUT}`,
      checkLoginStatus: `login/${USER_CHECK_LOGIN_STATUS}`
    }),

    ...mapActions({
      getCurrentUser: 'login/getCurrentUser'
    }),

    handleExit () {
      this.logOut()
      this.$router.push({ name: 'Home' })
    }
  }
}
