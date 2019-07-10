import { mapState, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Post',

  props: {
    post: Object
  },

  data () {
    return {
      isEdit: false,
      isError: false,
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
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.isError = true
      } else {
        this.updatePost({ id: this.post.id, title: this.title, body: this.body, router: this.$router })
        this.isEdit = false
        this.isError = false
      }
    },

    handleDelete () {
      this.deletePost(this.post.id)
    }
  }
}
