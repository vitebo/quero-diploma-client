<template>
  <div>
    <main>
      <header class="profile-header card">
        <q-user />
      </header>
      <nuxt />
    </main>
  </div>
</template>

<script>
import QHeader from '~/components/QHeader.vue';
import QUser from '~/components/QUser.vue';

export default {
  components: {
    QHeader,
    QUser
  },
  async mounted() {
    const name = localStorage.getItem('name');
    if (!name) {
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss">
@import '~assets/scss/main.scss';

html {
  font-family: /* Roman */ -apple-system-body, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Lucida Grande, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Emoji, Segoe UI Symbol, /* CJK */ Hiragino Kaku Gothic Pro, Meiryo, Hiragino Sans GB W3, /* Arabic */ Noto Naskh Arabic, Droid Arabic Naskh, Geeza Pro, Simplified Arabic, /* Thai */ Noto Sans Thai, Thonburi, Dokchampa, Droid Sans Thai, /* Sans Fallbacks */ Droid Sans Fallback, '.SFNSDisplay-Regular', /* CJK Fallbacks */ Heiti SC,  Microsoft Yahei;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 10px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #e1e9ee !important;
  overflow-x: hidden;
  font-size: 17px;
}

.header {
  margin-bottom: 6px;
}

.profile-header {
  border: none !important;
  border-bottom: 2px solid #EBEBEB;
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-bottom: 6px;

  &::before {
    content: '';
    height: 120px;
    background: linear-gradient(90deg, #05869B 0%, #18ACC4 100%);
    //background-image: url(https://static-exp2.licdn.com/sc/h/3chad3rzxalsf65nuo7hxciac);
    //background: linear-gradient(90deg, #dd9f05 0%, #fdb914 100%);
    width: 100%;
    position: absolute;
  }
}
</style>
