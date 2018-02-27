<template>
  <div class="card box">
    <box-header :title="title" :loggedIn="loggedIn"></box-header>
    <div class="card-body">
      <form v-on:submit.prevent="login">
        <div class="input-group mb-3">
          <input type="text" class="form-control" id="username" placeholder="Username" required>
          <div class="input-group-append">
            <span class="input-group-text"><i class="fa fa-user" aria-hidden="true"></i></span>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" id="password" placeholder="Password" required>
          <div class="input-group-append">
            <span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span>
          </div>
        </div>
        <div class="row mt-4 align-items-center">
          <div class="col-md-4 col-sm-4">
            <button class="btn btn-primary log-in" type="submit">Sign In</button>
          </div>
          <div class="col-md-8 col-sm-8 text-left">
            <a href="#">Lost Your Password?</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      title: 'Login Form',
      loggedIn: false
    }
  },
  methods: {
    login () {
      this.$router.push({ path: '/logged-in' })
    }
  }
}
</script>
