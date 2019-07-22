<template>
    <div class="wrapper">
        <div class="user_info">
            <div class="avatar">
                {{this.$route.params.user.slice(0, 1)}}
            </div>
        </div>
        <div class="posts_section">
            <form @submit.prevent="handleSubmit" class="form-newPost">
                <textarea
                    placeholder="Description..."
                    v-model="body"
                    class="text-newPost"
                ></textarea>
                <button class="button-submit">Post</button>
            </form>
            <div class="posts" v-for="(post, index) in posts" :key="index">
                <post
                    :post="post"
                    :index="index"
                ></post>
            </div>
        </div>
    </div>
</template>

<script src="./user-page.js"></script>

<style scoped lang="scss">
    @import "./user-page.scss";
</style>
