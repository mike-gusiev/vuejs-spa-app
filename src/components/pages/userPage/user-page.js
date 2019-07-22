import { mapActions, mapState } from 'vuex'
import Post from '../../ui-components/Post/Post.vue'

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
      this.newPost({ userId: JSON.parse(localStorage.getItem('User')).id,
          userName: this.$route.params.user,
          body: this.body })
      this.body = ''
    }
  }
}
