import { mapState, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import { SIGN_IN_LOG_IN } from '../../../store/modules/login/mutation-types'

export default {
  name: 'Login',

  data () {
    return {
      name: '',
      password: ''
    }
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.isLogin) {
        next({ name: 'Home' })
      }
    })
  },

  created () {
    this.getUsers()
  },

  computed: {
    ...mapState('login', ['users']),
    ...mapState('login', ['isLogin'])
  },

  validations: {
    name: {
      required
    },

    password: {
      required,
      correctPassword (value) {
        return this.users.some(user => user.name === this.name && user.password === value)
      }
    }
  },

  methods: {
    ...mapActions({
      getUsers: 'login/getUsers'
    }),

    handleLogin () {
      if (!this.$v.$invalid) {
        this.$store.commit(`login/${SIGN_IN_LOG_IN}`, this.name)
        this.$router.push({ name: 'Home' })
      }
    }
  }
}
