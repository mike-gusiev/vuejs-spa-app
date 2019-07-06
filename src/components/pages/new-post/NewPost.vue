<template>
    <div>
        <layout-header></layout-header>
        <div class="wrapper">
            <h2 class="h2">New Post</h2>
            <form>
                <input type="text" placeholder="Title" v-model="title">
                <textarea cols="30" rows="10" placeholder="Description..." v-model="body"/>
                <div v-if="isError" class="error">Incorrect title or description</div>
                <input type="submit" value="Submit" @click="validateForm">
            </form>
        </div>
    </div>
</template>

<script src="./new-post.js"></script>

<style scoped lang="scss">
    @import "./new-post.scss";
</style>
