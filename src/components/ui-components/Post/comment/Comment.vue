<template>
    <div class="comment">
        <div class="user-info">
            <div class="avatar">{{comment.owner.name.slice(0, 1)}}</div>
            <div class="user-name">{{comment.owner.name}}</div>
        </div>
        <div class="comment-body">{{comment.comment}}</div>
    </div>
</template>

<script src="./comment.js"></script>

<style scoped lang="scss">
    @import './comment.scss';
</style>
