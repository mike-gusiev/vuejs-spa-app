<template>
    <div>
        <div class="wrapper">
            <h2 class= "h2">New Post</h2>
            <form @submit.prevent="handleNewPost">
                <input type="text"
                       placeholder="Title"
                       v-model="title"
                       @blur="$v.title.$touch()"
                >
                <div v-if="$v.title.$dirty && !$v.title.required" class="error-text">Title is required</div>
                <textarea cols="30"
                          rows="10"
                          placeholder="Description..."
                          v-model="body"
                          @blur="$v.body.$touch()"
                ></textarea>
                <div v-if="$v.body.$dirty && !$v.body.required" class="error-text">Description is required</div>
                <button type="submit" class="button-submit">Update</button>
            </form>
        </div>
    </div>
</template>

<script src="./new-post.js"></script>

<style scoped lang="scss">
    @import "./new-post.scss";
</style>
