import { mapActions, mapState } from 'vuex'
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Registration',

  data () {
    return {
      name: '',
      password: '',
      confirmPassword: ''
    }
  },

  computed: {
    ...mapState('login', ['isLogin'])
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.isLogin) {
        next({ name: 'Home' })
      }
    })
  },

  validations: {
    name: {
      required,
      minLength: minLength(4)
    },

    password: {
      required,
      minLength: minLength(4)
    },

    confirmPassword: {
      sameAsPassword: sameAs('password')
    }
  },

  methods: {
    validateName (value) {
      this.name = value
      this.$v.name.$touch()
    },

    validatePassword (value) {
      this.password = value
      this.$v.password.$touch()
    },

    validateConfirmPassword (value) {
      this.confirmPassword = value
      this.$v.confirmPassword.$touch()
    },

    ...mapActions('registration', ['registrationUser']),

    handleRegistration () {
      if (!this.$v.$invalid) {
        this.registrationUser({ router: this.$router, name: this.name, password: this.password })
      }
    }
  }
}
