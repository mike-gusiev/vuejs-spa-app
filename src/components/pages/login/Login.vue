<template>
  <div>
    <form @submit.prevent="handleLogin" >

    <input type="text"
        v-model.trim="$v.name.$model"
        placeholder="Name"
        class="input-form"
        autocomplete="off" />
        <div class="error-text" v-if="isError && !$v.name.required">Name is required</div>

      <input type="password"
        v-model.lazy="$v.password.$model"
        placeholder="Password"
        class="input-form"
        autocomplete="off" />

      <div class="error-text" v-if="isError && !$v.password.required">Password is required</div>
      <div class="error-text" v-if="isError && !$v.password.correctPassword">Invalid login</div>

      <button type="submit" class="button-submit">Submit</button>
    </form>
  </div>
</template>

<script src="./login.js"></script>

<style lang="scss" scoped>
  @import "./login.scss";
</style>
