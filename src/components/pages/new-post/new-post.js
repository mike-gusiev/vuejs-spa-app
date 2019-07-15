import { mapActions, mapState } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'NewPost',

  data () {
    return {
      title: '',
      body: ''
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

  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (!vm.isLogin) {
        next({ name: 'Home' })
      }
    })
  },

  methods: {
    ...mapActions({
      newPost: 'posts/newPost'
    }),

    validateTitle (value) {
      this.title = value
      this.$v.title.$touch()
    },

    validateBody (value) {
      this.body = value
      this.$v.body.$touch()
    },

    handleNewPost () {
      if (!this.$v.$invalid) {
        this.newPost({ id: Date.now(), title: this.title, body: this.body, router: this.$router })
      }
    }
  }
}
