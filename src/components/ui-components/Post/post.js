import { fetchUpdatePost } from '../../../api'

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
  methods: {
    changePost () {
      this.isEdit = true
    },
    validateForm (event) {
      event.preventDefault()
      if (this.title.length === 0 || this.body.length === 0) {
        this.isError = true
      } else {
        this.handleForm(this.post.id, this.title, this.body)
      }
    },
    async handleForm (id, body, title) {
      await fetchUpdatePost(id, body, title)
      await this.$store.dispatch('posts/getPosts')
      this.isError = false
      this.isEdit = false
    }
  }

}
