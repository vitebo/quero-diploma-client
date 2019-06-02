<template>
  <div>
    <div id="google-signin-btn"></div>
  </div>
</template>

<script>
import LoginService from '../services/login_service.js';

export default {
  methods: {
    onSignIn(user) {
      LoginService.signIn(user.getBasicProfile());
    }
  },
  mounted() {
    gapi.signin2.render('google-signin-btn', {
      onsuccess: this.onSignIn
    })
  }
}
</script>
