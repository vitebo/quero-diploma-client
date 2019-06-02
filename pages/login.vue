<template>
  <div class="container">
    <main class="main">
      <q-logo class="logo" />
      <div id="google-signin-btn"></div>
    </main>
  </div>
</template>

<script>
import LoginService from '../services/login_service.js';
import QLogo from '~/components/QLogo.vue'

export default {
  components: {
    QLogo
  },
  methods: {
    onSignIn(user) {
      LoginService.signIn(user.getBasicProfile());
      this.$router.push('/');
    }
  },
  mounted() {
    gapi.signin2.render('google-signin-btn', {
      onsuccess: this.onSignIn.bind(this)
    });
  }
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.main {
  min-height: 500px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
}

.logo {
  margin-bottom: 24px;
}

#google-signin-btn {
}
</style>
