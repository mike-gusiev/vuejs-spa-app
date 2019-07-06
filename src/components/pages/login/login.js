import Header from '../../layout/Header/Header.vue'
import { fetchUsers } from '../../../api'

export default {
  name: 'Login',
  components: {
    'layout-header': Header
  },
  data () {
    return {
      name: '',
      password: '',
      isError: false
    }
  },
  methods: {
    validateForm (event) {
      event.preventDefault()
      fetchUsers()
        .then(response => response.data)
        .then(users => {
          users.forEach(user => {
            if (this.name === user.name && this.password === user.password) {
              this.isError = false
              this.handleLogin(user)
            } else {
              this.isError = true
            }
          })
        })
        .catch(err => console.log(err))
    },
    handleLogin (user) {
      this.$store.commit('user/changeIsLogin', true)
      localStorage.setItem('User', JSON.stringify(user))
      this.$router.push({ path: '/' })
    }
  }
}
