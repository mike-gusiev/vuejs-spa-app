import { mapState, mapMutations } from 'vuex'
import { USER_CHECK_LOGIN_STATUS, SIGN_IN_LOG_OUT } from '../../../store/modules/login/mutation-types'

export default {
  name: 'Header',

  created () {
    this.$store.commit(`login/${USER_CHECK_LOGIN_STATUS}`)
  },

  computed: {
    ...mapState('login', ['isLogin']),

    userName () {
      let user = JSON.parse(localStorage.getItem('User'))
      return user.name
    }
  },

  methods: {

    handleExit () {
      return {
        ...mapMutations([SIGN_IN_LOG_OUT])
      }
    }
  }
}
