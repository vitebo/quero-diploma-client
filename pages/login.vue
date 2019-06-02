<template>
  <div class="container-login">
    <main class="main card">
      <q-logo class="logo" />
      <div class="qcontent">
        <p class="qtext">O <strong>CarteiraEdu</strong> é o jeito mais fácil de gerenciar e apresentar a sua carteira virtual de diplomas e certificados, validados e chancelados pelas instituições de ensino.</p>
        <div>
        </div>
        <div id="google-signin-btn"></div>
      </div>
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
  layout: 'login',
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

.container-login {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding-top: 16px;
}

.main {
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 60px 0 120px 0 !important;

  border: none;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
  margin-bottom: 0;
  border-top: none;
}

.logo {
  margin-bottom: 24px;
}

#google-signin-btn {
  position: absolute;
  bottom: 60px;
}

.qcontent {
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 16px 24px;
  font-size: 1.6rem;
  opacity: .9;
  flex-direction: column;
}

.qtext {
  margin-bottom: 32px;
  line-height: 3rem;
  font-size: 2.2rem;
  text-align: center;
}
</style>
