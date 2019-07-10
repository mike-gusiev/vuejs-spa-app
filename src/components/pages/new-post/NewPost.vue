<template>
    <div>
        <div class="wrapper">
            <h2 class= "h2">New Post</h2>
            <form @submit.prevent="handleNewPost">
                <input type="text" placeholder="Title" v-model="$v.title.$model">
                <div v-if="isError && !$v.title.required" class="error-text">Title is required</div>
                <textarea cols="30" rows="10" placeholder="Description..." v-model="$v.body.$model"/>
                <div v-if="isError && !$v.body.required" class="error-text">Description is required</div>
                <button type="submit" class="button-submit">Update</button>
            </form>
        </div>
    </div>
</template>

<script src="./new-post.js"></script>

<style scoped lang="scss">
    @import "./new-post.scss";
</style>
