import { mapActions, mapState } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'NewPost',

  data () {
    return {
      title: '',
      body: '',
      isError: false
    }
  },

  computed: {
    ...mapState('login', ['isLogin'])
  },

  validations: {
    title: {
      required
    },
    body: {
      required
    }
  },

  created () {
    this.loginStatus()
    if (!this.isLogin) {
      this.$router.push({ name: 'Home' })
    }
  },

  methods: {
    ...mapActions({
      loginStatus: 'login/loginStatus',
      newPost: 'posts/newPost'
    }),

    handleNewPost () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.isError = true
      } else {
        this.isError = false
        this.newPost({ id: Date.now(), title: this.title, body: this.body, router: this.$router })
      }
    }
  }
}
