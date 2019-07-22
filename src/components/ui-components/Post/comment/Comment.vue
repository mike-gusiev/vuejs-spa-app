<template>
    <div class="comment">
        <div class="user-info">
            <div class="avatar">{{comment.owner.name.slice(0, 1)}}</div>
            <div class="user-name">{{comment.owner.name}}</div>

            <div class="post-actions">
                <button class="edit" v-if="comment.owner.id === currentUserId" @click="handleEditComment">
                    <i class="fas fa-times" v-if="isEdit"></i>
                    <i class="far fa-edit" v-else></i>
                </button>
                <button class="delete"
                        v-if="comment.owner.id === currentUserId || postOwnerId === currentUserId"
                        @click="handleDelete"
                ><i class="fas fa-trash"></i></button>
            </div>
        </div>
        <form class="form-comment" v-if="isEdit" @submit.prevent="handleUpdate">
            <textarea class="text-comment" v-model="textComment"></textarea>
            <button class="comment-submit">Update comment</button>
        </form>
        <div class="comment-body" v-else>{{textComment}}</div>
    </div>
</template>

<script src="./comment.js"></script>

<style scoped lang="scss">
    @import './comment.scss';
</style>
