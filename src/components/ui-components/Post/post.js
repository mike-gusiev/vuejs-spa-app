import { mapState, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Post',

  props: {
    post: Object,
    index: Number
  },

  data () {
    return {
      isEdit: false,
      title: this.post.title,
      body: this.post.body
    }
  },

  computed: {
    ...mapState('post', ['posts'])
  },

  validations: {
    title: {
      required
    },
    body: {
      required
    }
  },

  methods: {
    changePost () {
      this.isEdit = true
    },

    ...mapActions({
      'updatePost': 'posts/updatePost',
      'deletePost': 'posts/deletePost'
    }),

    handleUpdate () {
        if (!this.$v.$invalid) {
        this.isEdit = false
        this.updatePost({ id: this.post.id, title: this.title, body: this.body, router: this.$router, index: this.index }, this.index)
      }
    },

    handleDelete () {
      this.deletePost(this.post.id)
    }
  }
}
