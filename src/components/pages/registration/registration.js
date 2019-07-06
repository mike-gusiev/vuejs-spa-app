import Header from '../../layout/Header/Header.vue'
import { fetchRegistration } from '../../../api'

export default {
  name: 'Registration',
  components: {
    'layout-header': Header
  },
  data () {
    return {
      name: '',
      password: '',
      confirmPassword: '',
      isError: false
    }
  },
  methods: {
    handleRegistration (event) {
      event.preventDefault()
      if (this.password === this.confirmPassword) {
        fetchRegistration(this.name, this.password)
        this.isError = false
        this.$router.push({ path: '/login' })
      } else {
        this.isError = true
      }
    }
  }
}
