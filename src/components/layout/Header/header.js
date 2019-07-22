import { mapState, mapMutations, mapActions } from 'vuex'
import {  SIGN_IN_LOG_OUT } from '../../../store/modules/login/mutation-types'

export default {
  name: 'Header',

  created () {
      this.getCurrentUser()
  },

  computed: {
    ...mapState('login', ['currentUser']),
    ...mapState('login', ['isLogin'])
  },

  methods: {
    ...mapMutations({
      logOut: `login/${SIGN_IN_LOG_OUT}`
    }),

    ...mapActions({
      getCurrentUser: 'login/getCurrentUser'
    }),

    userLogOut () {
      this.logOut()
      this.$router.push({ name: 'Home' })
    }
  }
}
