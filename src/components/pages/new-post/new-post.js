import Header from '../../layout/Header/Header.vue'
import { fetchNewPost } from '../../../api'

export default {
  name: 'NewPost',
  components: {
    'layout-header': Header
  },
  data () {
    return {
      title: '',
      body: '',
      isError: false
    }
  },
  created () {
    this.$store.commit('user/startedLogin')
    if (!this.$store.state.user.isLogin) {
      this.$router.push({ path: '/' })
    }
  },
  methods: {
    validateForm (event) {
      event.preventDefault()
      if (this.title.length === 0 || this.body.length === 0) {
        this.isError = true
      } else {
        this.handleForm(this.title, this.body)
      }
    },
    async handleForm (body, title) {
      await fetchNewPost(body, title)
      this.$router.push({ path: '/' })
    }
  }
}
