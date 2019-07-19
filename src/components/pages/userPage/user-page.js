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
    this.getPosts(JSON.parse(localStorage.getItem('User')).id)
  },

  computed: {
    ...mapState('login', ['isLogin']),
    ...mapState('posts', ['posts'])
  },

  methods: {
    ...mapActions({
      getPosts: 'posts/getPosts',
      newPost: 'posts/newPost'
    }),

    handleSubmit () {
      this.newPost({ userId: JSON.parse(localStorage.getItem('User')).id, userName: this.$route.params.user, body: this.body })
      this.body = ''
    }
  }
}
