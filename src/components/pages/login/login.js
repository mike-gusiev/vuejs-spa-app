import { mapState, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import { SIGN_IN_LOG_IN } from '../../../store/modules/login/mutation-types'

export default {
  name: 'Login',

  data () {
    return {
      name: '',
      password: '',
      isError: false
    }
  },

  computed: {
    ...mapState('login', ['users'])
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
      this.getUsers()
        .then(() => {
          this.$v.$touch()
          if (this.$v.$invalid) {
            this.isError = true
          } else {
            this.isError = false
            this.$store.commit(`login/${SIGN_IN_LOG_IN}`, { router: this.$router, name: this.name, password: this.password })
          }
        })
    }
  }
}
