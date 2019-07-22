import { mapActions, mapState } from 'vuex'
import Post from '../../ui-components/Post/Post.vue'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'UserPage',

  data () {
    return {
      body: ''
    }
  },

  components: {
    'post': Post
  },

  validations: {
    body: {
      required
    }
  },

  created () {
    this.getUserPosts(JSON.parse(localStorage.getItem('User')).id)
  },

  computed: {
    ...mapState('login', ['isLogin']),
    ...mapState('posts', ['posts'])
  },

  methods: {
    ...mapActions({
      getUserPosts: 'posts/getUserPosts',
      newPost: 'posts/newPost'
    }),

    handleSubmit () {
      if (!this.$v.$invalid) {
        this.newPost({ userId: JSON.parse(localStorage.getItem('User')).id,
          userName: this.$route.params.user,
          body: this.body })
        this.body = ''
      }
    }
  }
}
