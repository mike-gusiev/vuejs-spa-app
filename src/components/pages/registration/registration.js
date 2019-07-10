import { mapActions } from 'vuex'
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Registration',

  data () {
    return {
      name: '',
      password: '',
      confirmPassword: '',
      isError: false
    }
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
    ...mapActions('registration', ['registrationUser']),

    handleRegistration () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.isError = true
      } else {
        this.isError = false
        this.registrationUser({ router: this.$router, name: this.name, password: this.password })
      }
    }
  }
}
