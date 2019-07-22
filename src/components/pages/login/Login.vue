<template>
  <div>
    <form @submit.prevent="userLogin" class="form-login">

    <input type="text"
        v-model.trim="name"
        placeholder="Name"
        class="form-input"
        autocomplete="off"
        @blur="$v.name.$touch()"
    />
        <div class="text-error" v-if="$v.name.$dirty && !$v.name.required">Name is required</div>

      <input type="password"
        v-model.lazy="password"
        placeholder="Password"
        class="form-input"
        autocomplete="off"
        @blur="$v.password.$touch()"
      />

      <div class="text-error" v-if="$v.password.$dirty && !$v.password.required">Password is required</div>
      <div class="text-error" v-if="$v.password.$dirty && !$v.password.correctPassword">Invalid login</div>

      <button type="submit" class="button-submit">Submit</button>
    </form>
  </div>
</template>

<script src="./login.js"></script>

<style lang="scss" scoped>
  @import "./login.scss";
</style>
