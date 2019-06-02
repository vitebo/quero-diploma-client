<template>
  <div>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import QHeader from '~/components/QHeader.vue';
import '@/assets/scss/main.scss';

export default {
  components: {
    QHeader
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
</style>
