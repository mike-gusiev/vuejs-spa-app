import { mapState, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'

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
      loginUser: 'login/loginUser',
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
            this.loginUser({ router: this.$router, name: this.name, password: this.password })
          }
        })
    }
  }
}
